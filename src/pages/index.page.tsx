
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/layout/Layout'
import { InferGetServerSidePropsType, NextPage } from 'next'
import { Product } from '@/interface/product';
import Image from 'next/image';
import Presentation from '@/components/ui/presentation/Presentation';
import Team from '@/components/ui/team/Team';
import Units from '@/components/ui/units/Units';
import { TeamI } from '@/interface/team';


//  interface Props {
//    	products: Product[];
//   }

const Home: NextPage<Props>= ({products,team}) =>  {
  
  return (   
    // <Layout title='Vita Neg. Agrop - Inicio'>
    <>
      <Presentation/>
       <Team 
          team = {team }          
          id={'team'}
          title = {'Equipo'}/> 
        <div  className={styles.separador}> 
          <Image src='/logo-vita.png'  alt='logo' width={400} height={400} className={styles.image}></Image>
        </div>
       <Units 
          products = {products}         
          id = {'empresa'}
          title = {'Unidades de Negocio'}/>        
    </>
      // </Layout>   
  )
}


export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("https://vitapp.vercel.app/api/products")
  // const res = await fetch("http://localhost:3000/api/products")
  const products : Product[] = await res.json() 
  // const resTeam = await fetch("http://localhost:3000/api/team")
  const resTeam = await fetch("https://vitapp.vercel.app/api/team")
  const team : TeamI[] = await resTeam.json()   
  return{props:
      {products, 
        team}}
}

export type Props = InferGetServerSidePropsType<typeof getServerSideProps>
