import styles from "./Form.module.css";
import Input from "../Input/Input";
function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <Input placeHolder="Name" />
          <Input placeHolder="Last Name" />
          <Input placeHolder="Email" />
          <Input placeHolder="Phone" />
        </div>
        <button className={styles.button}>Add Contact</button>
      </div>
    </div>
  );
}

export default Form;
