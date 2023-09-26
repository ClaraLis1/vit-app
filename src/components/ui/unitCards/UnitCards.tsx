import Image from 'next/image'
import React from 'react'
import styles from '@/components/ui/unitCards/UnitCards.module.css'



const UnitCards = () => {
  return (
       <div  className={styles.separador}> 
          <Image src='/logo-vita.png'  alt='logo' width={400} height={400} className={styles.image}></Image>
        </div>
     

  )
}

export default UnitCards