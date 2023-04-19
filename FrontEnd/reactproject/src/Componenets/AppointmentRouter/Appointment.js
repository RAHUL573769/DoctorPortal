import React, { useState } from 'react';
import AppointmentBaner from './AppointmentBaner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [selected, setSelected]=useState(new Date());
  
    return (
        <div>
           <AppointmentBaner selected={selected} setSelected={setSelected} ></AppointmentBaner>

           <AvailableAppointments selected={selected} setSelected={setSelected}></AvailableAppointments>
        </div>
    );
};

export default Appointment;