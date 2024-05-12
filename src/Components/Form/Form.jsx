import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
import Error from "../Error/Error";
import { inputs } from "../inputs";
import ContactsList from "../ContactsList/ContactsList";
function Form() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
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
    }
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    console.log(contact, "=================");
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
        <ContactsList contacts={contacts} />
      </div>
    </>
  );
}

export default Form;
