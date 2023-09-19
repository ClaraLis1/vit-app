import { users } from "@/data/users"
import { NextApiRequest, NextApiResponse } from "next"



const handler =async (req:NextApiRequest, res: NextApiResponse)=> {
    const {email, password} = req.body

    const findUser = users.find(user => user.email === email && user.password===password)

    
    if (!findUser) {
        res.status(403).send({ message: "Error: usuario no encontrado" })
      
    } 
    res.setHeader("set-cookie", `Access=true; path=/; samesite=lax; httponly`)
    res.status(200).send({message:"logueado correctamente"})
  
  }
  
  
  export default handler