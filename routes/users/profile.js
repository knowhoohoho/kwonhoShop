const db = require('../../models');

const profile = (req,res) => {
  try{
    const {id} = req;
    const user = await db.user.findOne({
      where : {id : id}
    })
    if(user) {
      const {email, nickname} = user
      return res.status(200).json({
        data: {
          email,
          nickname
        }
      })
    }
  }catch(e) {
    console.log('eeeee', e)
  }
 }

const modifyProfile = async (req,res) => {
 try{

 }catch(e) {
   console.log(e)
 }
}




module.exports = {
  profile,
  modifyProfile

}