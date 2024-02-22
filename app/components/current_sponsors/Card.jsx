import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";

const Card = (image, name) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="sponsors" height={50} width={50} />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default Card;
