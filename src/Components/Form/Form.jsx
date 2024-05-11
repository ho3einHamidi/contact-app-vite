import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
function Form() {
  const [data, setData] = useState({
    name: null,
    lastName: null,
    email: null,
    phone: null,
  });
  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const buttonHanlder = () => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <Input name="name" onChange={onChangeInput} placeHolder="Name" />
          <Input
            name="lastName"
            onChange={onChangeInput}
            placeHolder="Last Name"
          />
          <Input name="email" onChange={onChangeInput} placeHolder="Email" />
          <Input name="phone" onChange={onChangeInput} placeHolder="Phone" />
        </div>
        <button onClick={buttonHanlder} className={styles.button}>
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default Form;
