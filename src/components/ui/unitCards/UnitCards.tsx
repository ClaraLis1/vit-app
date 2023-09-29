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
          <h1>{data.path}</h1>
          <p>
          {data.description}
          </p>
        </div>

      </div>
       

     

  )
}

export default UnitCards