import { Product } from "@/interface/product";

export const getUnit = async(id: any) => {
  const res = await fetch("https://vitapp.vercel.app/api/products")  
  const products : Product[] = await res.json() 
  const data = products.find(product => product.path === id)   
  console.log(data);
   
  //  return data;
  }