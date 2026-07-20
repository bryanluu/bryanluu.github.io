import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesSection(props) {
  const services = props.data;

  return (
    <section className="container pb-5">
      <div className="bg-primary-subtle shadow rounded-4 p-3 p-md-4">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {services.map((service) => (
            <div key={service.title} className="col">
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-4 mb-0">
        Not sure which fits?{" "}
        {/* TODO: wire up booking service */}
        <a
          href="#"
          className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          Book a discovery call
        </a>
      </p>
    </section>
  );
}

export default ServicesSection;
