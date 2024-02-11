import styles from "./NewButton.module.scss";

const NewButton = ({ text = "Demo" }) => {
  return <button className={styles.Button}>{text}</button>;
};

export default NewButton;
