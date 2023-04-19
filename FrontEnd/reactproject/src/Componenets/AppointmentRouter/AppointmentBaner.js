import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker'

const AppointmentBaner = ({selected,setSelected}) => {
   

    return (
        <div>
         <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chair} className='max-w-sm round'/>
    <div>
     <DayPicker

mode="single"
      selected={selected}
      onSelect={setSelected}
   

     />
     <p>You picked {format(selected, 'PP')}.</p>;
    </div>
  </div>
</div>   
        </div>
    );
};

export default AppointmentBaner;