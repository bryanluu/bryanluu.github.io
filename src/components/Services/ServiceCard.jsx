import React from "react";

function ServiceCard(props) {
  const service = props.data;

  return (
    <div className="card rounded-4 p-4 h-100 d-flex flex-column">
      <i
        className={`bi ${service.icon} fs-1 text-primary-adaptive mb-3`}
        aria-hidden="true"
      />
      <h3 className="fs-4 mb-2">{service.title}</h3>
      <p className="text-body-secondary flex-grow-1">{service.description}</p>
      <div className="mt-3">
        <div className="small text-body-secondary mb-1">{service.priceLabel}</div>
        <div className="fs-3 fw-bold text-body-emphasis">{service.priceCad}</div>
        <div className="small text-body-secondary">{service.priceUsd}</div>
      </div>
    </div>
  );
}

export default ServiceCard;
