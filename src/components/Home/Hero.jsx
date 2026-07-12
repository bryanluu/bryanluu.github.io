import React from "react";

function Hero() {
  return (
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 container">
          <div class="d-flex justify-content-center align-items-center gap-3">
            <i
              class="bi bi-cpu"
              style={{ fontSize: "72pt" }}
              aria-hidden="true"
            ></i>
            <i
              class="bi bi-three-dots"
              style={{ fontSize: "32pt" }}
              aria-hidden="true"
            ></i>
            <i
              class="bi bi-file-earmark-code"
              style={{ fontSize: "72pt" }}
              aria-hidden="true"
            ></i>
            <i
              class="bi bi-three-dots"
              style={{ fontSize: "32pt" }}
              aria-hidden="true"
            ></i>
            <i
              class="bi bi-window"
              style={{ fontSize: "72pt" }}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="col-lg-6">
          <p class="text-primary">Software-focused engineering physicist.</p>
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            I build from the wires to the web.
          </h1>
          <p class="lead">
            I understand and build systems across the technology stack that
            implement and track your objectives.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* TODO: link buttons */}
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              See my work
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
