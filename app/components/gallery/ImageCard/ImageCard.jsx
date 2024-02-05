import styles from "./card.module.scss"
import Image from "next/image"

const ImageCard = ({image}) => {
  return (
    <div className={styles.wrapper}>
        <Image src={image} alt="images" priority fill/>
    </div>
  )
}

export default ImageCard