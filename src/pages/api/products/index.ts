import products from '@/data/products'
import { Product } from '@/interface/product'
import { log } from 'console'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = Product[] | { message: string }

const handler =async (req:NextApiRequest, res: NextApiResponse<Data>)=> {

  // Consultar el method de la petición si es get enviamos los datos de lo contrario enviamos un mensaje de error
  // if (req.method === "GET") {
    const response = await res.status(200).json(products)
  // } else {
  //   res.status(400).json({ message: "Método no permitido" })
  // }

   
}


export default handler