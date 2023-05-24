import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = (props) => {
  const { user } = useContext(AuthContext);

  const email = user?.email;
  console.log(user);
  // console.log(props.treatment);
  const { name: treatmentName, slots } = props.treatment;
  // console.log(slots)
  console.log(props.treatment);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const email = e.target.email.value;
    const phone1 = e.target.phone.value;
    const name = e.target.treatment.value;

    const booking = {
      treatment: treatmentName,
      phone1,
      email,
      slot,
      appointmentDate: date
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const date = format(props.props.selected, "PP");

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{props.treatment.name}</h3>
          <form onSubmit={handleModalSubmit} className="grid gap-3 grid-cols-1">
            <input
              disabled
              type="text"
              name="date"
              placeholder="Type here"
              value={date}
              className="input w-full "
            />

            <select className="select w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot} className="select w-full max-w-xs">
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              disabled
              className="input w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone Number"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              name="treatment"
              value={props.treatment.name}
              className="input w-full"
            />

            <br />
            <input
              className=" btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
