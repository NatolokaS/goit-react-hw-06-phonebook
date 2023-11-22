import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => (
  <Container>
    <h2>Phonebook</h2>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <Contacts />
  </Container>
);