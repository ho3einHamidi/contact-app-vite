import ContactsItem from "../ContactsItem/ContactsItem";
import styles from "./ContactsList.module.css";
function ContactsList({ contacts }) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h2>Contacts List</h2>
      <div className={styles["contacts"]}>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <ContactsItem key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : (
          <p className={styles.alert}>No Contacts Yet!</p>
        )}
      </div>
    </div>
  );
}

export default ContactsList;
