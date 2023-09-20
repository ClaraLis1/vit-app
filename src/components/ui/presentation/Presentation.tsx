import React, { useEffect, useRef } from 'react'
import styles from './Presentation.module.css'
import Image from 'next/image'

const Presentation = () => {

 

  return (
    <>
  
     <div id='home' className={styles.videoContainer}>     
        <video  className={styles.video}   preload="true" loop autoPlay muted>
          <source src="/video/presentacion.mp4" type="video/mp4" />
          {/* <source src="/girasolvideo.mp4" type="video/mp4" /> */}
          Tu navegador no admite el elemento video.
        </video>
      <div className={styles.content}>
       <Image 
          src='/logo_sin_fondo.png' 
          alt='logo' 
          width={500} 
          height={300} 
          className={styles.image} 
          priority={true}
          placeholder="blur"
          blurDataURL={'logo_sin_fondo.png'}
        >          
      </Image>
       

    </div>
  </div>  
    </>
  )
}

export default Presentation

