import React from "react";

export const ContactPicker = (props) => {

const contacts = props.contacts;
console.log(contacts);

  return (
    <div>
      <label htmlFor='contact-picker'>Contacts</label>
      <select onChange={props.handleSelect}>
        <option value='blank' id='contact-picker'></option>
        {
          contacts.map((element, index) => {
            return <option value={element.name} id='contact-picker' key={index}>{element.name}</option>
          })
        }
      </select>
    </div>
    
  );
};
