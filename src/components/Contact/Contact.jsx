import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    return (
      <li>
        {this.props.contactName} : {this.props.contactNumber}
        <button type="button" onClick={() => this.props.onDeleteContact(this.props.id)}>
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string,
  contactName: PropTypes.string,
  contactNumber: PropTypes.string,
  onDeleteContact: PropTypes.func
};

export default Contact;
