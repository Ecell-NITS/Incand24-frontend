import React, { lazy } from 'react'
import styles from "../Hero/CAcard.module.scss"
import Image from 'next/image'

const CAcard = ({image , text}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.image}>
            <Image src={image}  height={250} width={250} layout='contain'/>
        </div>

        <div className={styles.text}>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default CAcard