import News from "@/components/ui/news/News";
import { Product } from "@/interface/product";
import { getUnit } from "@/service/getUnit";
import { NextPage } from "next";
import Link from "next/link";


const Index :NextPage=()=>{
  
    return(
        <div style={{marginTop:'150px', textAlign:'center'}}>
            <h1 style={{marginTop:'30px'}}>Proximamente....</h1>
            <h2 style={{marginTop:'30px'}}>Cuentas Corrientes Cereales</h2>

            <Link href={'/'}><button style={{padding:'20px', marginTop:'130px', width:'200px', fontSize:'20px', border:'none', backgroundColor:'grey'}}>Volver</button></Link>
        </div>
    )

} 

export default Index;