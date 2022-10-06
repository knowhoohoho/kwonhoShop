const db = require('../../models')
const bcrypt = require('bcrypt');
const jwt = require('../../auth/jwt');

//login
const login = async (req,res,next) => {
  const { nickname, password} = req.body;

   //id 체크
  const user = await db.user.findOne({
    where : {nickname : nickname}
   })
  if(!user){return {result :false , message:'존재하지 않는 아이디'}}

  //pw 체크
  const userCheck =  bcrypt.compareSync(password, user.password);
  if(!userCheck) {
    res.json({
      results : false,
      message : "비밀번호 일치 하지 않습니다."
    })
  };

  const insertToken = 'INSERT INTO usertoken(id,content) value(?,?)'
  await connection.query(insertToken, [user.id, token.refreshToken]);
  await connection.commit();
  await connection.release();
  return token;

}

module.exports = login;