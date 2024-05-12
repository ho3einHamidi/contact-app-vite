import "./ContactsList.module.css";
function ContactsList({ contacts }) {
  return (
    <div>
      <h3>Contacts List</h3>
      <ul>
        {contacts.map((item) => (
          <li key={item.index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
