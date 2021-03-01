import React from 'react';

import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div className='font-weight-bold'>
            <h6 className="text-brand text-start mb-4 mt-3 ps-2  font-weight-bold ">Appointments</h6>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;