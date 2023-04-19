import React from "react";
import doctor from "../../assets/images/doctor.png";
import doctorbg from "../../assets/images/appointment.png";
import Button from "../Shared/PrimaryButton/Button";

const Appointent = () => {
  return (
    <div className="mt-12" style={{ background: `url(${doctorbg})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 lg:w-1/2 hidden lg:block max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Make an Appointment TodAY</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointent;
