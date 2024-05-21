import { connection } from "../db/connection.js";


export const getProducts = async (req,res)=> {
   
    try {
        console.log(req.query.limit)
        console.log(req.query.offset)
        const limit = parseInt(req.query.limit)
        const offset = parseInt(req.query.offset)
        const [result,fields] = await connection.query(`SELECT * FROM products LIMIT ? OFFSET ?`,[limit,offset])
        return res.status(200).json(result)
    }catch(err) {
        return res.status(500).send({message:err})
    }
      
}