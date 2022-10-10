const db = require('../../models');

const profile = (req,res) => {
  try{

  }catch(e) {
    console.log('errror :::: ', e)
  }
 }



const modifyProfile = async (req,res) => {
  try{
    const {id} = req;
    const user = await db.user.filndOne({
      where : {id : id}
    })
    if(user) {
      
    }






  }catch(e) {
    console.log('eeeee', e)
  }
}




module.exports = {
  profile,
  modifyProfile

}