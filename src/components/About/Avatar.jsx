import React from "react";
import Image from "../Image";

function Avatar(params) {
  const { src, alt, size = 50, className, style } = params;

  const wrapperStyle = {
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
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default Avatar;
