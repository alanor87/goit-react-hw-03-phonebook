import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from "uuid";


class App extends React.Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.contacts.some(({ name }) => name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      event.currentTarget.reset();
      return;
    };
    const newContact = { name: this.state.name, number: this.state.number, id: uuidv4() }
    this.setState(prevState => {
      return ({
        contacts: [...prevState.contacts, newContact]
      })
    });
    event.currentTarget.reset();
  }

  handleInputChange = (event) => {
    const fieldType = event.target.name;
    const fieldContent = event.target.value;
    this.setState({ [fieldType]: fieldContent })
  }

  handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    this.setState({ filter: filterValue });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  }

  deleteConact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    })
    )
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onFormSubmit} inputHandler={this.handleInputChange} />
          <h2>Contacts</h2>
          <ContactList contacts={this.getFilteredContacts()} deleteContactHandler={this.deleteConact}>
            <Filter filterHandler={this.handleFilterChange} />
          </ContactList>
        </div>
      </div>
    );
  }

}

export default App;
