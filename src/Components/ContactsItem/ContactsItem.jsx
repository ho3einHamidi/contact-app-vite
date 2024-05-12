import styles from "./ContactsItem.module.css";
import phoneIcon from "../../assets/icon/cellphone-icon.png";
import emailIcon from "../../assets/icon/email-icon.png";
import trashIcon from "../../assets/icon/trash-icon.png";
function ContactsItem({
  contact: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li className={styles["contacts-Wrapper"]} key={id}>
      <div>
        {name} {lastName}
      </div>
      <div className={`${styles["email-wrapper"]} ${styles.display}`}>
        <img src={emailIcon} alt="email-icon" />
        <p>{email}</p>
      </div>
      <div className={`${styles["call-wrapper"]} ${styles["display"]}`}>
        <img src={phoneIcon} alt="phone-icon" />
        <p>{phone}</p>
      </div>
      <div className={`${styles["delete-wrapper"]} ${styles.display}`}>
        <img
          id={id}
          onClick={(e) => deleteHandler(e.target.id)}
          src={trashIcon}
          alt="trash-icon"
        />
      </div>
    </li>
  );
}

export default ContactsItem;
