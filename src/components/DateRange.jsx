import React from "react";

function DateRange(props) {
  if (isNaN(Date.parse(props.start))) throw new Error("Invalid start given");

  if (isNaN(Date.parse(props.end))) throw new Error("Invalid end given");

  const dateStart = new Date(props.start);
  const dateEnd = new Date(props.end);

  return (
    <span className={props.className}>
      <time dateTime={dateStart.toString()}>
        {dateStart.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </time>{" "}
      -{" "}
      <time dateTime={dateEnd.toString()}>
        {dateEnd.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}
      </time>
    </span>
  );
}

export default DateRange;
