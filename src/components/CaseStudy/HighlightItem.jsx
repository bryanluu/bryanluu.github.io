import React from "react";

function HighlightItem(props) {
  return (
    <li className="d-flex align-items-center gap-2">
      <i className={`bi ${props.icon} fs-4 text-primary flex-shrink-0`}></i>
      <span>{props.children}</span>
    </li>
  );
}

export default HighlightItem;
