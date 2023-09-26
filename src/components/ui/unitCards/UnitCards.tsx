import Image from 'next/image'
import React from 'react'
import styles from '@/components/ui/unitCards/UnitCards.module.css'


const UnitCards = () => {
  return (
 
//   <>
//    <div  className={styles.separador} > 
   
//    <Image src='/logo-vita.png'  alt='logo' width={400} height={400} className={styles.image}></Image>
// </div>
// <div className={styles.separador} style={{ backgroundImage: 'url(/img/products/acopio.JPG), linear-gradient(to bottom, rgba(0,0,0,0.2), rgb(1, 153, 46))' }}></div>
//   </>
<>
<div className={styles.container}>
      <div className={styles.background}></div>
      <Image
        src="/img/products/acopio.JPG"
        alt="Imagen de fondo"
       
        width={800} // Define el ancho deseado de la imagen
        height={600} // Define la altura deseada de la imagen
/>
      <div className={styles.content}>
        {/* Tu contenido aquí */}
      </div>
    </div>
</>
  )
}

export default UnitCards