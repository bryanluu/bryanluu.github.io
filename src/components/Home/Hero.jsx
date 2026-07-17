import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 container">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <i className="bi bi-cpu hero-icon-lg" aria-hidden="true"></i>
            <i
              className="bi bi-three-dots hero-icon-sm"
              aria-hidden="true"
            ></i>
            <i
              className="bi bi-file-earmark-code hero-icon-lg"
              aria-hidden="true"
            ></i>
            <i
              className="bi bi-three-dots hero-icon-sm"
              aria-hidden="true"
            ></i>
            <i className="bi bi-window hero-icon-lg" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="text-primary">Software-focused engineering physicist</p>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            I build from the wires to the web.
          </h1>
          <p className="lead">
            Embedded software, hardware integration, and the web apps and
            dashboards that make the data useful.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="/#featured-work"
              type="button"
              className="btn btn-primary btn-lg me-md-2 d-flex gap-2"
            >
              <i className="bi bi-search"></i>
              See my work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
