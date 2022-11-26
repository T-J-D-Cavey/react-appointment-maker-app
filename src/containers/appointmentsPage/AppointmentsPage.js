import React, { useState}  from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  const [ title, setTitle ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  // Function to handle local states (linked to form inputs) to change appointment state: 
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
      props.setAppointments((prev) => [...prev, inputs]);
      setTitle('');
      setContact('');
      setDate('');
      setTime('');
      alert('Form submitted!')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        handleSubmit={handleSubmit} contacts={props.contacts}
         />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList props={props.appointments} />
      </section>
    </div>
  );
};
