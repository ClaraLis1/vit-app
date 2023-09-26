import Image from 'next/image'
import React from 'react'
import styles from '@/components/ui/unitCards/UnitCards.module.css'



const UnitCards = () => {
  return (
      // <div  className={styles.separador}> 
      //     <Image src='/logo-vita.png'  alt='logo' width={400} height={400} className={styles.image}></Image>
      //   </div>
      <div className={styles.imageContainer}>
      <Image
        src="/cebada.jpeg"
        alt="Imagen"
        width={800}
        height={600}
        className={styles.image}
      />
    </div>

  )
}

export default UnitCards