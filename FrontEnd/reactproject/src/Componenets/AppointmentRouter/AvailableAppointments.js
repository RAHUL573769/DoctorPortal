import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointOption from "./AppointOption";
import BookingModal from "./Modal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppointments = (props) => {
  // const [appointmentOptions, setAppointment] = useState([]);

  const date = props.selected;
  const newDate = format(date, "PP");
  console.log(newDate);
  const [treatment, setTreatment] = useState(null);

  const { data: options = [] } = useQuery({
    queryKey: ["options", newDate],
    queryFn: () =>
      fetch(`http://localhost:5000/options?date=${newDate}`).then((res) =>
        res.json()
      )
  });
  // useEffect(() => {
  //   fetch(`http://localhost:5000/options?date=${newDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointment(data));
  // }, []);
  return (
    <div>
      <p className="text-center">
        Available Appointments{format(props.selected, "PP")}
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {
    appointmentOptions.map(options=><AppointOption key={options._id} options={options}></AppointOption>)
} */}
        {options.map((option) => (
          <AppointOption
            key={option._id}
            setTreatment={setTreatment}
            option={option}
          ></AppointOption>
        ))}

        {treatment && (
          <BookingModal props={props} treatment={treatment}></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointments;
