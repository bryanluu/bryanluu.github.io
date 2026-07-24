import React from "react";

function ResultHighlights(props) {
  return (
    <div className="p-4 bg-primary-subtle border border-primary-subtle rounded-3 mb-3">
      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
        {props.children}
      </ul>
    </div>
  );
}

export default ResultHighlights;
