import React from "react";
import Contact from "../Contact";
import PropTypes from "prop-types";
import styles from './ContactList.module.css'

class ContactList extends React.Component {
  
  render() {
    const { children, contacts, deleteContactHandler } = this.props;
    return (
      <section>
        {children}
        {contacts.length ?
          (<ul className={styles['contact-list']}>
            {contacts.map((entry) => {
              return (
                <Contact
                  id={entry.id}
                  key={entry.id}
                  contactName={entry.name}
                  contactNumber={entry.number}
                  onDeleteContact={deleteContactHandler}
                />
              )
            }

            )}
          </ul>) :
          (<p>Nothing to see here</p>)
        }
      </section>)
    ;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContactHandler: PropTypes.func,
};

export default ContactList;
