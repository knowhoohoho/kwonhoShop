const pool = require('../../DB/db');
const bcrypt = require('bcrypt');
const jwt = require('../../auth/jwt');

let connection;
const login = async (req,res,next) => {
  const { nickname, password} = req.body;
  connection = await pool.getConnection()
  connection.beginTransaction();
  const userSelect = 'select * from user where nickname =?';

  //id 체크
  const [[userID]] = await connection.query(userSelect, nickname)
  console.log(userID)
  if(!userID){return {result :false , message:'존재하지 않는 아이디'}}

  //pw 체크
  const userCheck =  bcrypt.compareSync(password, userID.password);
  if(!userCheck) {
    await connection.rollback()
    res.json({
      results : false,
      message : "비밀번호 일치 하지 않습니다."
    })
  };

  const token =  jwt.sign(userID.id);
  if(token) {
    res.json({results : false , message : '이미 로그인되어있습니다.'})
  }

  const insertToken = 'INSERT INTO usertoken(id,content) value(?,?)'
  await connection.query(insertToken, [userID.id, token.refreshToken])
  await connection.commit();
  await connection.release()
  return token;

}

module.exports = login