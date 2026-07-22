import React from "react";
import FigureGridItem from "./FigureGridItem";

function FigureGrid({ items, rowClassName = "" }) {
  return (
    <div
      className={`row g-5 mb-3 justify-content-center${rowClassName ? ` ${rowClassName}` : ""}`}
    >
      {items.map((item) => (
        <FigureGridItem key={item.alt} {...item} />
      ))}
    </div>
  );
}

export default FigureGrid;
