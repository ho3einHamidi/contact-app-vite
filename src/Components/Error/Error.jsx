import styles from "./Error.module.css";
function Error({ alert }) {
  return (
    <div className={styles.container}>
      <p>{alert} </p>
    </div>
  );
}

export default Error;
