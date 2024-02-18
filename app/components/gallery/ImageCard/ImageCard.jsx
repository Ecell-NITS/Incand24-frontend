import Image from "next/image";
import styles from "./card.module.scss";

const ImageCard = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={image}
        alt="images"
        priority
        fill
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  );
};

export default ImageCard;
