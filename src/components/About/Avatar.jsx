import React from "react";
import Image from "../Image";

function Avatar(params) {
  const { src, alt, size = 50, className, style } = params;

  const wrapperStyle = {
    position: "relative",
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    overflow: "hidden",
    ...style,
  };

  return (
    <div
      className={`bg-secondary-subtle${className ? ` ${className}` : ""}`}
      style={wrapperStyle}
    >
      <Image
        src={src}
        alt={alt}
        className=""
        style={{ objectFit: "cover" }}
        fill
      />
    </div>
  );
}

export default Avatar;
