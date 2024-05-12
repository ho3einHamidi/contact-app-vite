import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useState } from "react";
import Error from "../Error/Error";
import { inputs } from "../inputs";
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
    } else {
      setAlert(null);
    }
    console.log(data);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            {inputs.map((input) => {
              return (
                <Input
                  name={input.name}
                  key={input.id}
                  value={input.name}
                  placeHolder={input.placeHolder}
                  type={input.type}
                  onChange={onChangeInput}
                />
              );
            })}
          </div>
          <button onClick={buttonHanlder} className={styles.button}>
            Add Contact
          </button>
        </div>
      </div>
      <div>{alert && <Error alert={alert} />}</div>
    </>
  );
}

export default Form;
