import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { delContact, getPhoneBookValue } from 'redux/phoneBookSlice';
import { ContactItemStyle, ContactListStyle } from './Contacts.styled';
import { ButtonStyle } from 'components/App.styled';

export const Contacts = () => {
  const dispatch = useDispatch();

  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyle type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactListStyle>
  );
};