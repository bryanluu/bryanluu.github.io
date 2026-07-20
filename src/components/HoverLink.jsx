import React from "react";

function HoverLink(props) {
  const { className, children, ...rest } = props;

  return (
    <a
      className={[
        "link-underline",
        "link-underline-opacity-0",
        "link-underline-opacity-100-hover",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </a>
  );
}

export default HoverLink;
