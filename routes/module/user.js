const jwt = require('../middleware/jwt');
const bcrypt = require('bcrypt');
const pool = require('../../DB/db');



let connection


exports.login  = async (data) => {
      const { nickname, password} = data;
      connection = await pool.getConnection()
      connection.beginTransaction();
      const userSelect = 'select * from user where nickname =?';

      //id 체크
      const [[userID]] = await connection.query(userSelect, nickname)
      console.log(userID)
      if(!userID){return {result :false , message:'존재하지 않는 아이디'}}

      //pw 체크
      console.log(userID.password)
      const userCheck =  bcrypt.compareSync(password, userID.password);
      if(!userCheck) {
        await connection.rollback()
        res.json({
          results : false,
          message : "ffff"
        })
      };

      const token =  jwt.sign(userID.id);
      const insertToken = 'INSERT INTO usertoken(id,content) value(?,?)'
      await connection.query(insertToken, [userID.id, token.refreshToken])
      await connection.commit();
      await connection.release()
      return token;
}

exports.membership = async (data) => {
    try {
      console.log(data)
      const { nickname, password, email, username, Manager, phone} = data;
      const saltRounds = 10;
      connection = await pool.getConnection();
      

      //user 검사
      const userSelect = 'select * from user where nickname = ' + connection.escape(nickname);
      const [dbUSer] = await connection.query(userSelect);

      if(dbUSer.length > 0) {return {results :false, message : '이미 회원이 존재합니다.'}};
      const hashPw =  bcrypt.hashSync(password, saltRounds);
      console.log(hashPw)

      //db에 저장

      const insertQuery = "INSERT INTO user (nickname, username, password, phone, email ,Manager) VALUES (?,?,?,?,?,?)"
      const values = [nickname, username, hashPw, phone, email, Manager]
      await connection.query(insertQuery, values)
      await connection.commit();

      return true;
    }catch (e) {
      console.log(e)
    }finally {
      if(connection) {
        connection.release();
      }
    }
}

exports.myShop = async (data) => {
  try {
    const user = data;
    


  }catch(e) {
    console.log(e)
  }
}