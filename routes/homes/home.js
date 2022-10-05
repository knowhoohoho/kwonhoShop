
const db = require('../../models')

let conection ;
const mainHome = async (req,res) => {
 try{
   console.log(req.body)
  const user = await db.shop.create({
    name : req.body.name
  })
  res.status(200).json('success')

 }catch(e) {
   console.log(e)
 }
}



module.exports = mainHome