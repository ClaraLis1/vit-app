import React from 'react'
import { Card } from '../card/Card'
import{FC} from 'react'
import { Product } from '@/interface/product'
import styles from './Units.module.css'



interface Props {
  	products: Product[];
    id: string
    title: string
 }

const Units : FC<Props>= ({products, title, id}) => {
  return (
    <div id={id} className={styles.article}>
          <h1 className={styles.sectionTitle}> <b ></b> <span>{title}</span> <b ></b> </h1>
          <div className={styles.grid}>
            {products?.map((product) => (
              <Card key={product.id} product={product} />            
            ))}
           </div>     
        </div>
  )
}

export default Units