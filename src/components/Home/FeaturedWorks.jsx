import React from "react";
import SkillList from "../SkillList";

function CaseStudyCard(props) {
  const caseStudy = props.data;

  return (
    <section className="card rounded-4 shadow-lg h-100">
      {/* <pre>{JSON.stringify(caseStudy, null, 2)}</pre> */}
      {caseStudy.preview && (
        <div className="ratio ratio-4x3 rounded-top-4 overflow-hidden bg-light border-bottom">
          <img
            src={caseStudy.preview.src}
            alt={caseStudy.preview.alt}
            className="object-fit-contain p-3"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
          />
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <SkillList skills={caseStudy.skills} />
        <div className="d-flex align-items-baseline gap-2">
          <h3 className="card-title fs-3">{caseStudy.title}</h3>
          <span className="fs-3">
            {caseStudy.association === "Personal"
              ? "" // hide for personal projects
              : " @ " + caseStudy.association}
          </span>
        </div>
        <bold className="fw-medium">{caseStudy.role}</bold>
        <time
          dateTime={caseStudy.dates.end}
          className="d-block small text-body-secondary mb-2"
        >
          {caseStudy.dates.label}
        </time>
        <p className="">{caseStudy.description}</p>
        {caseStudy.link && (
          <a
            href={`/work/${caseStudy.slug}/`}
            className="icon-link icon-link-hover
          link-underline link-underline-opacity-0 link-underline-opacity-100-hover
          align-items-baseline mt-auto"
          >
            Read about {caseStudy.name}
            <i className="bi bi-chevron-right"></i>
          </a>
        )}
      </div>
    </section>
  );
}

function FeaturedWorks(props) {
  const caseStudies = props.data;
  return (
    <section className="container">
      <h4 className="fs-4" id="featured-work">
        Featured work
      </h4>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="col">
            <CaseStudyCard data={cs} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedWorks;
