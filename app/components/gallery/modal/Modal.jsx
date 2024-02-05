import styles from "./Modal.module.scss"
import Image from "next/image"
const Modal = ({id , setIsModalVissible , isModalVissible}) => {
    const src = `/images/card/img${id}.svg`;
  return (
    <div className={`${styles.container}  ${isModalVissible ? styles.visible : ""}` } onClick={()=>{setIsModalVissible(false)} }>
        <div className={styles.frame}>
        <Image src={src} fill priority alt="image"/>
        </div>
    </div>
  )
}

export default Modal