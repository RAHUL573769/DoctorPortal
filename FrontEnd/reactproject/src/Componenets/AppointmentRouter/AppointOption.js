import React from "react";

const AppointOption = ({ option, setTreatment }) => {
  const { id, name, slots } = option;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length}
            {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions justify-end">
            <label
              onClick={() => setTreatment(option)}
              htmlFor="my-modal-3"
              className="btn  btn-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointOption;
