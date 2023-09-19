import React from 'react'
import { Card } from '../card/Card'
import { Product } from '@/interface/product'
import{FC} from 'react'
import styles from './Team.module.css'
import { TeamCard } from '../teamCards/TeamCard'
import { TeamI } from '@/interface/team'


interface Props {
  	team: TeamI[];
    id: string
    title: string
 }

const Team : FC<Props>= ({team, title, id}) => {
  return (
    <div id={id} className={styles.article}>
          <h1 className={styles.sectionTitle}> <b></b> <span>{title}</span> <b></b> </h1>
          <div className={styles.grid}>
          
            {team?.map((t) => (
              <TeamCard key={t.id} team={t} />            
            ))}
           </div>     
        </div>
  )
}

export default Team