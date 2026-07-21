import React from "react";

function DotList(props) {
  const skills = props.skills;

  if (!skills || skills.length === 0) return;

  return (
    <ul className="skill-list d-flex flex-wrap row-gap-1">
      {skills.map((skill, idx) => (
        <li key={idx} className={props.className || "text-primary"}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default DotList;
