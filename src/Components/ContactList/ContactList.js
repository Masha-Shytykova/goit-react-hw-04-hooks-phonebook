import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <ContactListItem
          name={name}
          key={id}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
