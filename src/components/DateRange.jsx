import React from "react";

// "YYYY-MM" strings are parsed by `new Date()` as UTC midnight, which
// renders as the previous month in timezones behind UTC (e.g. Pacific).
// Parsing the components manually builds the date in local time instead.
function parseYearMonth(yearMonth) {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function DateRange(props) {
  if (isNaN(Date.parse(props.start))) throw new Error("Invalid start given");

  if (isNaN(Date.parse(props.end))) throw new Error("Invalid end given");

  const dateStart = parseYearMonth(props.start);
  const dateEnd = parseYearMonth(props.end);

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
