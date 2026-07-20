import React from "react";
import NewTabHint from "./NewTabHint";

function ExternalLink(props) {
  const { children, ...rest } = props;

  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <NewTabHint />
    </a>
  );
}

export default ExternalLink;
