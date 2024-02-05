import Image from "next/image";
import styles from "./Modal.module.scss";
const Modal = ({ id, setIsModalVissible, isModalVissible }) => {
  const src = `/images/card/img${id}.svg`;
  return (
    <div
      role="button"
      aria-label="home button"
      tabIndex={0}
      className={`${styles.container}  ${isModalVissible ? styles.visible : ""}`}
      onClick={() => {
        setIsModalVissible(false);
      }}
      onKeyDown={() => {
        setIsModalVissible(false);
      }}
    >
      <div className={styles.frame}>
        <Image src={src} fill priority alt="image" />
      </div>
    </div>
  );
};

export default Modal;
