const db = require('../../models')


let conection; 
const bookMark = async (req,res) => {
  try {
    const user = await db.sequelize.create({
      name : req.body.name
    })
    res.status(200).json('success')


  }catch (e){
    console.log(e)
  }finally {
    if(conection) {
      conection.release();
    }
  }
    

}


module.exports = bookMark;