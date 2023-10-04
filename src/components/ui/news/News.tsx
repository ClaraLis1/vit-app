import React, { FC } from 'react'
import Image from 'next/image'
import styles from './News.module.css'

const News: FC = () => {
  return (
    <div className={styles.content}>
          <h1 className={styles.sectionTitle}> <b ></b> <span>Alianzas estrategicas:</span> <b ></b> </h1>
        <div className={styles.imagesContainer}>
            <Image 
            src='/img/news/stine.png' 
            alt='logo' 
            width={500} 
            height={500} 
            priority={true}
            placeholder="blur"
            blurDataURL={'logo_sin_fondo.png'}
            >          
        </Image>
       
        <Image 
            src='/img/news/primia.png'
            alt='logo' 
            width={600} 
            height={161} 
            priority={true}
            placeholder="blur"
            blurDataURL={'logo_sin_fondo.png'}
            >          
        </Image>

        </div>  
    </div>
  )
}

export default News