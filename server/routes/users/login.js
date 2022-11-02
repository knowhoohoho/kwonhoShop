const db = require('../../models')
const bcrypt = require('bcrypt');
const jwt = require('../../auth/jwt');

//login
const login = async (req,res,next) => {
  try{
  const { nickname, password} = req.body;
  console.log(req.body)

   //id 체크
  const user = await db.user.findOne({
    where : {nickname : nickname}
   })
  if(!user){return res.json({result :false , message:'존재하지 않는 아이디'})}

  //pw 체크
  const userCheck = await bcrypt.compareSync(password, user.password);
  if(!userCheck) {
    res.json({
      results : false,
      message : "비밀번호 일치 하지 않습니다."
    })
  };
  
  const token = jwt.sign(user.id)

  //db 저장
  const data = {
    id: user.id,
    refreshToken : token.refreshToken
  }
 const tokenIn = await db.token.create(data)
  return res.json({
    success : true,
    data :  token
  })
  }catch(e) { 
    console.log(e)
  }
  
}

module.exports = login;