import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp , faHome} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.infoContainer}>
            <h3>Vita S.R.L </h3>
            <p>Ruta ### Km #### Olavarría, Bs. As. | Argentina </p>
            <p>Tel.: (02284) | info@vita.com.ar</p>
        </div>
        <div>
            <Link href= '#home' className={styles.iconLink}><FontAwesomeIcon icon={faHome} className={styles.icon} /></Link>
        </div>
    </footer>
  )
}
