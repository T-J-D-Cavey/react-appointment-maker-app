import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} 
        onChange={(e) => setName(e.target.value)} required></input>
        <input type='tel' placeholder='Phone number' value={phone} 
        onChange={(e) => setPhone(e.target.value)} required></input>
        <input type='email' placeholder='Email' value={email} 
        onChange={(e) => setEmail(e.target.value)} required></input>
        <input type='submit' value='Submit'></input>      
      </form>
    </>
  );
};
