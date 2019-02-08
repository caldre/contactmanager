import React, { useState } from "react";
import PropTypes from "prop-types";

const Contact = props => {
  const [showContact, setShowContact] = useState(false);
  const { id, name, email, phone } = props;

  const handleShowContact = () => {
    setShowContact(showContact => !showContact);
  };

  const handleDeleteClick = () => {
    props.handleDelete(id);
  };

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}
        <i
          className={showContact ? "fas fa-sort-up" : "fas fa-sort-down"}
          style={{ cursor: "pointer" }}
          onClick={handleShowContact}
        />
        <i
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={handleDeleteClick}
        />
      </h4>

      {showContact ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleShowContact: PropTypes.func,
  handleDeleteClick: PropTypes.func
};

export default Contact;
