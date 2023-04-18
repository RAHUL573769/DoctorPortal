import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import SingleService from "./SingleService";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Floride Treament",
      img: flouride,
      bgClass:"bg-primary"
    },
    {
      id: 2,
      name: " Cloride Treament",
      img: cavity,
      bgClass:"bg-accent"
    },
    {
      id: 3,
      name: "Whitenng Treament",
      img: whitening,
        bgClass:"bg-primary"
    }
  ];
  return (
    <div>
      <div className="text-center">
        <h2 className='text-teal-300 text-primary uppercase font-bold' >
          Our Services
        </h2>
        <h3>Services We Provide</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
            serviceData.map(service=><SingleService service={service}></SingleService>)
        }
      </div>
    </div>
  );
};

export default Services;
