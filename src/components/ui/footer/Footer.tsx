import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faHome} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Footer = () => {
  const router = useRouter()
  const home = router.pathname.includes('/#');
  

  return (
    <footer className={styles.containerData}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>          
            <p>Rivadavia 2235 Olavarría, Bs. As. | Argentina </p>
            <p><Link  className={styles.contact} target="_blank" href="https://web.whatsapp.com/send?phone=5492494000857&text=Hola,%20necesito%20hacerles%20una%20consulta..." ><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />  +54 9 2494 000857</Link></p>
            <p><Link  className={styles.contactMobile} target="_blank" href="https://wa.me/5492494000857?text=Hola,%20necesito%20hacerles%20una%20consulta..." ><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />  +54 9 2494 000857</Link></p>
            {/* <p>info@vita.com.ar</p> */}
        </div>
        <div className={styles.infoContainerRight}>          
            <p>Ruta 226 Km 163.4 (Punto Tandil) Tandil, Bs. As.</p>
            <p><Link  className={styles.contact} target="_blank" href="https://web.whatsapp.com/send?phone=5492494000857&text=Hola,%20necesito%20hacerles%20una%20consulta..." ><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />  +54 9 2494 000857</Link></p>
            <p><Link  className={styles.contactMobile} target="_blank" href="https://wa.me/5492494000857?text=Hola,%20necesito%20hacerles%20una%20consulta..." ><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />  +54 9 2494 000857</Link></p>
            <p>lazaro@vitasrl.com.ar</p>
        </div>
      </div>
        {(home || router.pathname ==='/') &&
        <div>
            <Link href= '#home' className={styles.iconLink}><FontAwesomeIcon icon={faHome} className={styles.homeIcon} /></Link>
        </div>
        }
        <div className={styles.copyWrite}>Copyright 2023  <FontAwesomeIcon className={styles.iconCopyWrite} icon={faCopyright}/> CLARA</div>
    </footer>
  )
}
