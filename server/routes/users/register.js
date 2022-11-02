const db = require('../../models');
const bcrypt = require('bcrypt');

const signup = async (req,res) => {
  try{
      console.log(req.body);
      const { nickname, password, email} = req.body;
      const saltRounds = 10; 
      
      //user 검사
      const userCheck = await db.user.findOne({
        where : {nickname}
      })
      if(userCheck) { 
        return res.json({ success :false , message : "이미 존재하는 아이디입니다."})}  // 유저가 이미 존재 하면 

      const hashPw =  bcrypt.hashSync(password, saltRounds);
      const newUser = {
        nickname,
        password :hashPw,
        email
      }
      //db에 저장
      const userJoin = await db.user.create(newUser).then(result => {
        console.log('회원가입 성공')
      }).catch(e => {
        console.log(e)
      }) 
      
      return res.json({
        success : true,
        message : "회원가입 완료"
      })
  }catch(e) {
    console.log(e)
  }
}


module.exports = signup;