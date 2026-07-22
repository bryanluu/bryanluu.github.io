import React from "react";
import "../../styles/process-section.scss";

function ProcessStep(props) {
  const step = props.data;

  return (
    <div>
      <h3 className="fs-6 fw-bold mb-1">{step.title}</h3>
      <p className="small text-body-secondary mb-0">{step.description}</p>
    </div>
  );
}

function ProcessStepIcon(props) {
  const step = props.data;

  return (
    <div className="process-step-icon rounded-circle bg-white border border-primary d-flex align-items-center justify-content-center mx-auto">
      <i className={`bi ${step.icon} fs-4 text-primary`} aria-hidden="true" />
    </div>
  );
}

function ProcessSection(props) {
  const steps = props.data;

  // Icons and labels each render as `steps.length` equal-width flex columns,
  // so a column's center always sits at this fraction in from each edge —
  // used to inset the connecting line and to place the chevrons exactly on
  // each column boundary (the midpoint between two icon centers).
  const processLineInset = `${100 / (2 * steps.length)}%`;
  const chevronPositions = steps
    .slice(1)
    .map((_, idx) => `${((idx + 1) / steps.length) * 100}%`);

  return (
    <section className="bg-primary-subtle">
      <div className="container py-5">
        <h2 className="display-6 fw-bold mb-1">Process</h2>
        <p className="lead text-body-secondary mb-4">How we'll work together</p>

        {/* Mobile: icon+text side by side, connected by an arrow under each icon */}
        <div className="d-flex d-lg-none flex-column gap-3">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="d-flex align-items-center gap-3">
                <ProcessStepIcon data={step} />
                <ProcessStep data={step} />
              </div>
              {idx < steps.length - 1 && (
                <div className="process-mobile-connector">
                  <i
                    className="bi bi-arrow-down text-primary fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop: icon row with a connecting line, labels row below */}
        <div
          className="d-none d-lg-block"
          style={{ "--process-line-inset": processLineInset }}
        >
          <div className="process-icons d-flex align-items-center">
            {steps.map((step) => (
              <div key={step.title} className="process-icon-col text-center">
                <ProcessStepIcon data={step} />
              </div>
            ))}
            {chevronPositions.map((pos) => (
              <i
                key={pos}
                className="bi bi-chevron-right process-chevron"
                style={{ left: pos }}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="d-flex mt-3">
            {steps.map((step) => (
              <div key={step.title} className="process-label text-center">
                <ProcessStep data={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
