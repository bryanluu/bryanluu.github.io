import React from "react";
import NewTabHint from "./NewTabHint";

function HoverLink(props) {
  const { className, external = false, children, ...rest } = props;

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
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {external && <NewTabHint />}
    </a>
  );
}

export default HoverLink;
