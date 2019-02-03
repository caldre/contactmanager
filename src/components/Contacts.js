import React, { useState } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Jyrki R",
      email: "jyrki@gmail.com",
      phone: "666-1234"
    },
    {
      id: 2,
      name: "Niina K",
      email: "niina@gmail.com",
      phone: "666-4321"
    },
    {
      id: 3,
      name: "Isla R",
      email: "isla@gmail.com",
      phone: "666-666-6666"
    }
  ]);

  const deleteContact = id => {
    console.log(id);
  };

  return (
    <React.Fragment>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          handleDelete={deleteContact.bind(contact.id)}
        />
      ))}
    </React.Fragment>
  );
};

Contacts.propTypes = {
  deleteContact: PropTypes.func
};

export default Contacts;
