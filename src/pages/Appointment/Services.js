import React from "react";

const Services = ({ service, setTeatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-12">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600 font-bold">Try another date..</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            onClick={() => setTeatment(service)}
            disabled={slots.length === 0}
            className="btn btn-sm btn-primary text-white bg-gradient-to-r from-secondary to-primary"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Services;
