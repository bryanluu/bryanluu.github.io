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
    figureClassName = "mb-3",
    className = "img-fluid rounded-3 border",
    style,
    loading = "lazy",
    fetchPriority = "auto",
  } = params;

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
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      data-loaded={loaded || undefined}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );

  // A sibling div can't inherit the <img>'s reserved aspect-ratio box, so
  // without this its height:100% has nothing definite to resolve against
  // in a plain figure (no fixed-size or ratio-locked ancestor) and
  // collapses to a thin strip. Reuses className so rounding/border match
  // the image exactly; d-flex safely wins over any d-block it carries
  // (both !important, but d-flex is declared later in Bootstrap's CSS).
  const spinnerStyle =
    resolvedWidth && resolvedHeight
      ? { width: "100%", aspectRatio: `${resolvedWidth} / ${resolvedHeight}` }
      : { width: "100%", height: "100%" };

  const spinner = (
    <div
      style={spinnerStyle}
      className={`${className} d-flex justify-content-center align-items-center bg-secondary-subtle`}
    >
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const content = (
    <>
      {!loaded && spinner}
      {img}
    </>
  );

  if (!caption) return content;

  return (
    <figure className={figureClassName}>
      {content}
      <figcaption className="text-secondary small mt-1 mb-0">
        {caption}
      </figcaption>
    </figure>
  );
}

export default Image;
