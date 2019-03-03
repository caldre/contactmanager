import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context, Consumer } from "../context";

const Contact = props => {
  const [showContact, setShowContact] = useState(false);
  const { dispatch } = useContext(Context);
  const { id, name, email, phone } = props;

  let onDeleteClick = () =>
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });

  const handleShowContact = () => {
    setShowContact(showContact => !showContact);
  };

  return (
    <Consumer>
      {value => {
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
                onClick={onDeleteClick}
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
      }}
    </Consumer>
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
