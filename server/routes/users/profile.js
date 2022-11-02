const db = require('../../models');
const bcrypt = require('bcrypt');

const profile = async (req,res) => {
  try{
    const { id } = req;
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
    console.log(e)
  }
 }

const modifyProfile = async (req,res) => {
 try{
      const { id } = req;
      console.log(id)
      const { password } = req.body;
      const sort = 10;

      const user = await db.user.findOne({where : {id}});
      const currentPw = await bcrypt.compareSync(password, user.password)
      if(currentPw) {
        return res.json({
          success: false,
          message : '이전 비밀번호와 일치'
        })
      }
      let newPassword ;
      if(password) {
        newPassword =  await bcrypt.hashSync(password, sort);
        console.log('newPasword' , newPassword)
      }
      const updateUser = await db.user.update({
        password : newPassword
      }, {
        where  : {id}
      })
      return res.json({
        success: true,
        message : "비밀번호 변경 완료!!"
      })
 }catch(e) {
   console.log(e)
 }
}




module.exports = {
  profile,
  modifyProfile

}