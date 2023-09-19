import contact from '@/data/contact'
import { IForm } from '@/interface/contact'

import { NextApiRequest, NextApiResponse } from 'next'

type Data = IForm[] | { message: string }

const handler =async (req:NextApiRequest, res: NextApiResponse<Data>)=> {
    if (req.method === "POST") {
        const value = req.body
        contact.push({id:1, name: value.name, image:value.image})    
        console.log(req.body);

        
    //      if (!name || !image) {
    //      return res.status(400).json({ message: "Faltan campos por llenar" })
    //    }

        
    // contact.push({id:1, name:name, image:image})    
     return res.status(200).json(contact)

  }
   
}


export default handler