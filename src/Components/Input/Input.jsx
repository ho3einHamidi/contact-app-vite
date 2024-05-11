import PropTypes from "prop-types";
import styles from "./Input.module.css";
function Input({ placeHolder }) {
  return <input className={styles.input} placeholder={placeHolder} />;
}
Input.propTypes = {
  placeHolder: PropTypes.string,
};
export default Input;
