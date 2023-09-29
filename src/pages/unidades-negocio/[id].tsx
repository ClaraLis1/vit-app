import UnitCards from "@/components/ui/unitCards/UnitCards";
import { Product } from "@/interface/product";
import { getUnit } from "@/service/getUnit";
import { GetServerSideProps, NextPage } from "next";

interface Props {
    unit: Product
    id : any

}

const Index :NextPage<Props>=({unit, id})=>{
    console.log(unit);
    console.log(id);
    
    return(
        <>         
           <UnitCards 
           data={unit}/> 
        </>
    )

} 

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = (context.params?.id)   
    const data = await getUnit(id);
    return {
     props:{
      unit:data,
      id
     }
    };
  };
  