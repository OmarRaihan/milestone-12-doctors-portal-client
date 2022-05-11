import React from "react";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="font-semibold text-2xl text-teal-500">{name}</h2>
        <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500 uppercase">No Slot Available</span>}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES AVAILABLE" : "SPACE AVAILABLE"}
        </p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal"
            className="btn border-0 uppercase font-bold bg-gradient-to-r from-teal-500 to-emerald-500 shadow-xl"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
