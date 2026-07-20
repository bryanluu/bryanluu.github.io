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

export default BookingCalendar;
