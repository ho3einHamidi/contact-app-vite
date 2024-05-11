import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
import Error from "../Error/Error";
function Form() {
  const [data, setData] = useState({
    name: null,
    lastName: null,
    email: null,
    phone: null,
  });
  const [alert, setAlert] = useState("");
  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const buttonHanlder = () => {
    if (!data.name || !data.lastName || !data.email || !data.phone) {
      setAlert("Please Enter Valid Data!");
    }
    console.log(data);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <Input
              name="name"
              value={data.name}
              onChange={onChangeInput}
              placeHolder="Name"
            />
            <Input
              name="lastName"
              value={data.lastName}
              onChange={onChangeInput}
              placeHolder="Last Name"
            />
            <Input
              name="email"
              value={data.email}
              onChange={onChangeInput}
              placeHolder="Email"
            />
            <Input
              name="phone"
              value={data.phone}
              onChange={onChangeInput}
              placeHolder="Phone"
            />
          </div>
          <button onClick={buttonHanlder} className={styles.button}>
            Add Contact
          </button>
        </div>
      </div>
      {alert ? <Error alert={alert} /> : null}
    </>
  );
}

export default Form;
