import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = (props) => {
    console.log(props);
    return (
        <div>
            <p className='text-center'>Available Appointmnets {format(props.selected, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;