import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointOption from "./AppointOption";
import BookingModal from "./Modal/BookingModal";

const AvailableAppointments = (props) => {
  const [appointmentOptions, setAppointment] = useState([]);

  const [treatment,setTreatment]=useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  return (
    <div>
      <p className="text-center">
        Available Appointmnets {format(props.selected, "PP")}
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{/* {
    appointmentOptions.map(options=><AppointOption key={options._id} options={options}></AppointOption>)
} */}
{
    appointmentOptions.map(option=><AppointOption key={option._id} setTreatment={setTreatment} option={option}></AppointOption>)
}

<BookingModal treatment={treatment} ></BookingModal>

      </div>
    </div>
  );
};

export default AvailableAppointments;
