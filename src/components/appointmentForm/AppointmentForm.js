import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Appointment name' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
      <input type='date' min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} required></input>
      <input type='time' value={time} onChange={(e) => setTime(e.target.value)} required></input>
      <ContactPicker contacts={contacts} handleSelect={handleSelect}/>
      <input type='submit' value='Submit'/>
    </form>
  );
};
