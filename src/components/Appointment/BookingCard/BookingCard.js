import React from 'react';
import { useState } from 'react';
import AppointmentForm from '../AppoinmentForm/AppointmentForm';


const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3 shadow border-0">
                <div className="card-body text-center">
                    <h4 className='card-title text-brand'>{booking.subject}</h4>
                    <h6>{booking.visitingHour}</h6>
                    <small className='text-muted'>{booking.totalSpace} SPACES AVAILABLE</small>
                    <button onClick = {openModal} className='btn btn-brand text-uppercase text-white mt-3'>Book Appointment</button>
                    <AppointmentForm modalIsOpen ={modalIsOpen} closeModal ={closeModal} appointmentOn ={booking.subject} date ={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;