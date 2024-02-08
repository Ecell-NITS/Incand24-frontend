import Image from "next/image";
import styles from "./EventModal.module.scss";

const EventModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <Image alt="event image" src="/sponsors/Amul.png" fill layout="" />
      </div>

      <div className={styles.memories}>
        <h2>Memories</h2>
      </div>
    </div>
  );
};

export default EventModal;
