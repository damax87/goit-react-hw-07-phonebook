import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from 'redux/selectors';
import { FormContact } from "./ContactForm.style";
import { FormInput } from "./ContactForm.style";
import { FormButton } from "./ContactForm.style";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleChange = event => {
      const {name, value} = event.target;

      switch(name) {
        case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default: 
          return;
      }
    };

    const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactsLists = [...items];
    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name: name, phone: number }));
    }
    form.reset();
  };

    return (
    <FormContact onSubmit={handleFormSubmit}>
        <label>
      Name<FormInput
  type="text"
  name="name"
  value={name}
  onChange={handleChange}
  placeholder='Ex: David Guetta'
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </label>
      <label>
      Number<FormInput
  type="tel"
  name="number"
  value={number}
  onChange={handleChange}
  placeholder='Ex: XXX-XX-XX'
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      </label>

      <FormButton type='submit'>Add Contact</FormButton>
    </FormContact>
    )};
