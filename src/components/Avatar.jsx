import React from "react";

function Avatar(params) {
  const { src, alt, size = 50, className } = params;

  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    objectFit: "cover",
    ...params.style
  };

  return <img src={src} alt={alt} style={avatarStyle} className={className} />;
}

export default Avatar;