import React from "react";

function CaseStudyCard(caseStudy) {
  return (
    <div className="card rounded-4 shadow-lg">
      <img
        src="assets/thunderbird.jpg"
        alt="Random photo"
        className="card-img-top object-fit-scale"
        style={{ maxHeight: "300px" }}
      />
      <div className="card-body">
        <ul className="skill-list d-flex">
          <li className="text-primary">Embedded</li>
          <li className="text-primary">Robotics</li>
        </ul>
        <h3 className="card-title fs-3">UBC Sailbot</h3>
        <p className="text-secondary">
          Autonomous sailboat that took 1st at the 2014 robotic sailing regatta.
        </p>
        {/* TODO: link case study */}
        <a
          href=""
          className="icon-link icon-link-hover
          link-underline link-underline-opacity-0 link-underline-opacity-100-hover
          d-flex align-items-baseline"
        >
          Read case study <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

function SelectedWorks() {
  return (
    <div className="container">
      <h2 className="fs-3">Selected work</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
        <div className="col">
          <CaseStudyCard />
        </div>
        <div className="col">
          <CaseStudyCard />
        </div>
        <div className="col">
          <CaseStudyCard />
        </div>
      </div>
    </div>
  );
}

export default SelectedWorks;
