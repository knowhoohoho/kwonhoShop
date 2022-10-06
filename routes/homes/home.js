const db = require('../../models')

const mainHome = async (req,res) => {
 try{
  const shops = await db.shop.findAll({
  })
  return res.status(200).json({ success : true, data : shops})

 }catch(e) {
   console.log(e)
 }
}



module.exports = mainHome