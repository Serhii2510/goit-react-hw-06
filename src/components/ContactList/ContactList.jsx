import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContactsList.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
