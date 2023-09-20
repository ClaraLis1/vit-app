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
        <Image src='/logo_sin_fondo.png' alt='logo' width={500} height={300} className={styles.imagen}></Image>
        
      {/* <div className={styles.overlay}>      
      <p className={styles.animation}>Bienvenidos</p>
    </div> */}
      {/* Aquí puedes agregar más contenido sobre el video */}
    </div>
  </div>  
    </>
  )
}

export default Presentation

