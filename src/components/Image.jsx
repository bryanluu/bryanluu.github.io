import React, { useEffect, useRef, useState } from "react";

// `src` accepts either a plain URL string or an Astro-imported image object
// (`{ src, width, height }`), so callers can pass either an imported local
// image or a plain path/URL without unwrapping it themselves.
function Image(params) {
  const {
    src,
    alt,
    width,
    height,
    caption,
    captionClassName = "",
    figureClassName = "mb-3",
    className = "img-fluid rounded-3 border mx-auto d-block",
    style,
    // When the caller's own container already has a size (Avatar's fixed
    // px circle, Bootstrap's .ratio box) and wants the image to stretch
    // to fill it, rather than sizing off the image's own dimensions.
    // Sets both the wrapper and the <img> together so they can't drift
    // out of sync with each other.
    fill = false,
    loading = "lazy",
    fetchPriority = "auto",
  } = params;

  const fillStyle = fill ? { width: "100%", height: "100%" } : undefined;

  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Catches images already resolved from the browser cache by the time this
  // hydrates, since `load`/`error` won't fire again for those.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const resolvedSrc = typeof src === "string" ? src : src?.src;
  const resolvedWidth =
    width ?? (typeof src === "object" ? src?.width : undefined);
  const resolvedHeight =
    height ?? (typeof src === "object" ? src?.height : undefined);

  const img = (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt}
      width={resolvedWidth}
      height={resolvedHeight}
      className={`${className} img-fade-in`}
      style={{ ...fillStyle, ...style }}
      loading={loading}
      fetchPriority={fetchPriority}
      data-loaded={loaded || undefined}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );

  // Overlaid on the img via position:absolute rather than sitting beside
  // it in normal flow — a sibling with its own reserved height would add
  // to, not share, the img's own reserved aspect-ratio space, doubling
  // the layout height while loading and leaving a gap once it disappears.
  // Reuses className so rounding/border match the image; positioning
  // classes it carries (e.g. d-block) become inert once absolutely
  // positioned, and d-flex safely wins the display property regardless
  // (both !important, but d-flex is declared later in Bootstrap's CSS).
  const spinner = !loaded && (
    <div
      className={`${className} position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-secondary-subtle`}
    >
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  // fill=true: the caller's own container (a Bootstrap .ratio box, or
  // Avatar's own div) already needs to be the positioning context for the
  // spinner overlay, so we stay out of its way here rather than add our
  // own — Bootstrap's .ratio > * rule needs position:absolute, and our
  // position-relative utility (!important) would always beat it, however
  // it's applied, breaking the ratio box's own sizing in the process.
  const content = fill ? (
    <>
      {img}
      {spinner}
    </>
  ) : (
    <div style={{ position: "relative" }}>
      {img}
      {spinner}
    </div>
  );

  if (!caption) return content;

  return (
    <figure className={figureClassName}>
      {content}
      <figcaption
        className={`text-center text-secondary small mt-1 mb-0${captionClassName ? ` ${captionClassName}` : ""}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default Image;
