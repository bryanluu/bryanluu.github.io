import React from "react";
import SkillList from "../SkillList";
import DateRange from "../DateRange";

function Project(props) {
  const project = props.data;

  return (
    <div className="pr-3">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div className="d-flex align-items-baseline gap-2">
          <h4 className="card-title fs-4">{project.title}</h4>
          <span className="fs-4">
            {project.association === "Personal"
              ? "" // hide for personal projects
              : " @ " + project.association}
          </span>
        </div>
        {project.link && (
          <div className="d-flex align-items-center">
            <a
              href={project.link.url}
              className="icon-link icon-link-hover
              link-underline link-underline-opacity-0 link-underline-opacity-100-hover
              align-items-baseline mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.label}
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
        )}
      </div>
      <bold className="fw-medium">{project.role}</bold>
      {project.dates.start ? (
        DateRange({
          start: project.dates.start,
          end: project.dates.end,
          className: "d-block small text-body-secondary mb-2",
        })
      ) : (
        <time
          dateTime={project.dates.end}
          className="d-block small text-body-secondary mb-2"
        >
          {project.dates.label}
        </time>
      )}
      <p className="">{project.description}</p>
      <SkillList skills={project.skills} className="text-secondary" />
    </div>
  );
}

function ProjectsList(props) {
  const projects = props.data;
  return (
    <div className="container">
      <h5 className="fs-5 pb-2 text-secondary">Other projects</h5>
      <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-5">
        {projects.map((project) => (
          <Project data={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
