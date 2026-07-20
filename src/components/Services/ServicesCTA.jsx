import React from "react";

function ServicesCTA(props) {
  return (
    <section className="bg-primary text-center py-5">
      <div className="container">
        <h2 className="text-white mb-4">Ready to get started?</h2>
        <a
          href="/contact/"
          className="btn btn-light btn-lg px-4 text-primary-emphasis d-inline-flex align-items-center gap-2"
        >
          <i className="bi bi-telephone-fill" aria-hidden="true"></i>
          Book a discovery call
        </a>
      </div>
    </section>
  );
}

export default ServicesCTA;
