import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
import Error from "../Error/Error";
import { inputs } from "../inputs";
import ContactsList from "../ContactsList/ContactsList";
import { v4 } from "uuid";
function Form() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [alert, setAlert] = useState("");
  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
    } else {
      setAlert(null);
      const newContact = { ...contact, id: v4() };
      setContacts((contacts) => [...contacts, newContact]);
    }
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contacts) => {
      return contacts.id !== id;
    });
    setContacts(newContacts);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            {inputs.map((input, index) => {
              return (
                <Input
                  name={input.name}
                  key={index}
                  value={contact[input.name]}
                  placeHolder={input.placeHolder}
                  type={input.type}
                  onChange={onChangeInput}
                />
              );
            })}
          </div>
          <button onClick={addHandler} className={styles.button}>
            Add Contact
          </button>
        </div>
      </div>
      <div>{alert && <Error alert={alert} />}</div>
      <div>
        <ContactsList deleteHandler={deleteHandler} contacts={contacts} />
      </div>
    </>
  );
}

export default Form;
