import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListCantainer } from './ContactList.style';
import { ContactListItem } from './ContactList.style';
import { ContactListButton } from './ContactList.style';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

return (
    <ContactListCantainer>
{visibleContacts.map((contact, id) => (
  <ContactListItem key={id}>
    {contact.name}: {contact.phone}
    <ContactListButton type="button" onClick={() => handleDelete(contact.id)}>Delete
    </ContactListButton>
  </ContactListItem>
))}  
    </ContactListCantainer>
);
};
