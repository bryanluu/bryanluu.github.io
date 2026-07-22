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
  const resolvedWidth = width ?? (typeof src === "object" ? src?.width : undefined);
  const resolvedHeight = height ?? (typeof src === "object" ? src?.height : undefined);

  const img = (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt}
      width={resolvedWidth}
      height={resolvedHeight}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      data-loaded={loaded || undefined}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );

  if (!caption) return img;

  return (
    <figure className={figureClassName}>
      {img}
      <figcaption className="text-secondary small mt-1 mb-0">
        {caption}
      </figcaption>
    </figure>
  );
}

export default Image;
