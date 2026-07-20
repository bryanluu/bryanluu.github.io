import React from "react";

function MailForm(props) {
  return (
    <section className={props.className}>
      <h3 className="h4 text-center">Prefer email?</h3>
      <div className="d-flex flex-column gap-3">
        <div>
          <label for="name" className="form-label text-secondary">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Bruce Li"
          />
        </div>
        <div>
          <label for="message" className="form-label text-secondary">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="4"
            placeholder="Tell me a bit about what you're building..."
          ></textarea>
        </div>
        {/* TODO: make dynamic mailto link for btn */}
        <a href="" className="btn btn-outline-secondary me-auto">
          <i className="bi bi-envelope"></i> Email me
        </a>
      </div>
    </section>
  );
}

export default MailForm;
