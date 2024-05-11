import PropTypes from "prop-types";
import styles from "./Input.module.css";
function Input({ placeHolder, onChange, name }) {
  return (
    <input
      name={name}
      onChange={(event) => onChange(event)}
      className={styles.input}
      placeholder={placeHolder}
    />
  );
}
Input.propTypes = {
  placeHolder: PropTypes.string,
};
export default Input;
