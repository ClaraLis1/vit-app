import Image from 'next/image'
import React, { FC } from 'react'
import styles from '@/components/ui/unitCards/UnitCards.module.css'
import { Product } from '@/interface/product'

interface Props{
  data: Product
}


const UnitCards: FC<Props> = ({data}) => {
  return (
      <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
        src={data.image}
        alt="imagen"
        width="0"
        height="0"
        sizes="100vw"
         className={styles.imageContainer}
         style={{objectFit:"cover"}}
        >
        </Image>
        </div> 
        <div className={styles.textContainer}>        
          <h1 className={styles.unitTitle}>{data.title} - {data.position}</h1>
           {data.description?.map((item, index) =>(
            <p key={index} className={styles.textInfo}>
              {item}
            </p>
          )) }
         
        </div>

      </div>
       

     

  )
}

export default UnitCards