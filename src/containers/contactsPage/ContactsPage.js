import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';
 
export const ContactsPage = (props) => {
  
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  // Function to make sure phone number matches UK format
  useEffect(() => {
    const regexPhone = new RegExp(/[!@£$%^&*(){}|"':;?/>.<,~`±§]/);
    const failed = regexPhone.test(phone);
      if (failed) {
        alert('Unrecgnised format or characters in number. Please use numbers, + or spaces only'); 
        setPhone('');
      }
  }, [phone])

  // Function to check for name duplicate, to be called in handleSubmit function.
  const duplicateNameChecker = () => {
    const regexName = new RegExp(`(${name})`, 'i');
    const duplicate = props.contacts.find((element) => {
      return regexName.test(element.name)});
      if (duplicate) {
        alert('This name already exists. Please choose another'); 
        setName('');
      } else {
        addToContacts();
      }
  };

  // Function to update contacts state:
  const addToContacts = () => {
    const inputs = {
      name: name,
      phone: phone,
      email: email
    };
      props.setContacts((prev) => [...prev, inputs]);
      setName('');
      setPhone('');
      setEmail('');
      alert('Form submitted!')
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    duplicateNameChecker();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} setName={setName} 
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail} 
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList props={props.contacts} />
      </section>
    </div>
  );
};
