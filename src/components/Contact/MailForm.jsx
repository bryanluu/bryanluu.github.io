import React, { useState } from "react";
import NewTabHint from "../NewTabHint";

function makeMailToLink({ name, message }) {
  const email = "loc.bryan.luu@gmail.com";
  const params = [];
  if (name !== "")
    params.push(
      `subject=${encodeURIComponent(`Project inquiry from ${name}`)}`,
    );
  if (message !== "") params.push(`body=${encodeURIComponent(message)}`);

  const query = params.join("&");
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

function MailForm(props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const mailto = makeMailToLink({ name, message });
  return (
    <section className={props.className}>
      <h3 className="h4 text-center">Prefer email?</h3>
      <div className="d-flex flex-column gap-3">
        <div>
          <label htmlFor="name" className="form-label text-secondary">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Bruce Li"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label text-secondary">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="4"
            placeholder="Tell me a bit about what you're building..."
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <a
          className="btn btn-outline-secondary me-auto"
          href={mailto}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope" aria-hidden="true"></i> Email me
          <NewTabHint />
        </a>
      </div>
    </section>
  );
}

export default MailForm;
