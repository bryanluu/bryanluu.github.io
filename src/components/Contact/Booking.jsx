import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function BookingCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#266da9" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="discovery-call"
      calLink="bryan-luu/discovery-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}

function Booking(props) {
  return (
    <div className={props.className}>
      <section>
        <h1 className="display-4 fw-bold text-primary-emphasis mb-1">
          Let's talk!
        </h1>
        <p className="lead text-body-secondary">
          Book a free 45-minute discovery call, or send me a note.
        </p>
      </section>
      <section className="card border bg-primary-subtle rounded-4 shadow p-4 mb-5">
        <div className="card-body bg-light rounded-4 p-4">
          <h2 id="book-a-call" className="h4 mb-3 text-primary d-flex gap-2">
            <i className="bi bi-telephone" aria-hidden="true"></i> Book a call
          </h2>
          <BookingCalendar />
        </div>
      </section>
    </div>
  );
}

export default Booking;
