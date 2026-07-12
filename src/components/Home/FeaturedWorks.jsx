import React from "react";
import data from "../../data/case_studies.json";

function CaseStudyCard(props) {
  const caseStudy = props.data;
  return (
    <div className="card rounded-4 shadow-lg h-100">
      {/* <pre>{JSON.stringify(caseStudy, null, 2)}</pre> */}
      <div className="ratio ratio-4x3 rounded-top-4 overflow-hidden bg-light border-bottom">
        <img
          src={caseStudy.preview.src}
          alt={caseStudy.preview.alt}
          className="object-fit-contain p-3"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <ul className="skill-list d-flex">
          {caseStudy.skills.map((skill, idx) => (
            <li key={idx} className="text-primary">
              {skill}
            </li>
          ))}
        </ul>
        <h3 className="card-title fs-3">{caseStudy.title}</h3>
        <p className="text-secondary">{caseStudy.description}</p>
        {/* TODO: link case study */}
        <a
          href=""
          className="icon-link icon-link-hover
          link-underline link-underline-opacity-0 link-underline-opacity-100-hover
          align-items-baseline mt-auto"
        >
          Read about {caseStudy.name}
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

function FeaturedWorks() {
  const caseStudies = data;
  return (
    <div className="container">
      <h2 className="fs-3">Featured work</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="col">
            <CaseStudyCard data={cs} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWorks;
