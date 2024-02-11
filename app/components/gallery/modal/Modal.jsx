import Image from "next/image";
import styles from "./Modal.module.scss";
import { gallery } from "../Gallery/GalleryData";
const Modal = ({ id, column, setIsModalVissible, isModalVissible }) => {
  const thatColumnAllImages = [];
  for (let i = 0; i < gallery.length; i += 1) {
    if (gallery[i].name === column) {
      thatColumnAllImages.push(gallery[i].images);
      break;
    }
  }

  let src = "";
  for (let i = 0; i < thatColumnAllImages.length; i += 1) {
    for (let j = 0; j < thatColumnAllImages[i].length; j += 1) {
      if (thatColumnAllImages[i][j].id === id) {
        src = thatColumnAllImages[i][j].image;
        break;
      }
    }
  }

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
