import UnitCards from "@/components/ui/unitCards/UnitCards";
import { getUnit } from "@/service/getUnit";
import { GetServerSideProps, NextPage } from "next";

interface Props {
    unit: any
    id : any

}

const Index :NextPage<Props>=({unit, id})=>{
    console.log(unit);
    
    return(
        <>         
           <UnitCards/> 
        </>
    )

} 

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = (context.params?.id)
    console.log(id);
    
    const data = await getUnit(id);
    return {
     props:{
    //   unit:data,
      id
     }
    };
  };
  