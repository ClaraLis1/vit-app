import Image from 'next/image'
import React from 'react'
import styles from '@/components/ui/unitCards/UnitCards.module.css'



const UnitCards = () => {
  return (
      <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
        src='/img/products/silos arriba.JPG'
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
          <h1>Acopio</h1>
          <p>
          Comprendemos la Importancia de la cosecha y nos dedicamos a brindar al productor la oportunidad de comercializar sus granos en diversos mercados y puertos, colaborando estrechamente con distintos exportadores para asegurar el mejor negocio posible.
Trabajamos con molinos y consumos locales ampliando las opciones disponibles para el productor y garantizando un negocio más favorable.
En Insumos ofrecemos una amplia gama de productos esenciales para respaldar el éxito de sus cultivos.

          </p>
        </div>

      </div>
       

     

  )
}

export default UnitCards