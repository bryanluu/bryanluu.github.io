import React from "react";
import Image from "../Image";

function FigureGridItem({
  src,
  alt,
  caption = alt,
  captionClassName = "",
  col = "md-6",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      caption={caption}
      captionClassName={captionClassName}
      figureClassName={`col-${col}`}
    />
  );
}

export default FigureGridItem;
