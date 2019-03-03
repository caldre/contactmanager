import React from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

const Contacts = () => {
  return (
    <Consumer>
      {value => {
        const { contacts } = value.state;
        return (
          <React.Fragment>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Contacts;
