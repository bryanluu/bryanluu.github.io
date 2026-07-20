import React from "react";

function CTABanner(props) {
  return (
    <section className="p-5 text-center">
      <div className="container py-5">
        <h2 className="text-body-emphasis">Need my help?</h2>
        <p className="col-lg-8 mx-auto lead" style={{ textWrap: "balance" }}>
          I take on web apps, hardware-to-UI integrations, and technical
          consultations — every engagement at a fixed scope and price.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <a
            href="/contact/"
            className="btn btn-primary btn-lg px-3 me-md-2 d-flex gap-2"
          >
            <i className="bi bi-telephone-fill"></i>
            Book a discovery call
          </a>
          <a
            className="btn btn-outline-secondary btn-lg px-3"
            href="/services/"
          >
            Learn about my services <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
