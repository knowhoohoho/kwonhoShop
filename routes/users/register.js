const pool = require('../../DB/db');



let connection ;
const signup = async (req,res) => {
  try{
      console.log(req.body);
      const { nickname, password, email, username, Manager, phone} = req.body;
      const saltRounds = 10;
      connection = await pool.getConnection();
      

      //user 검사
      const userSelect = 'select * from user where nickname = ' + connection.escape(nickname);
      const [dbUSer] = await connection.query(userSelect);
      console.log(dbUSer.length);
      if(dbUSer.length > 0) {
        return res.json({results :false, message : '이미 회원이 존재합니다.'})
         };
      const hashPw =  bcrypt.hashSync(password, saltRounds);
      console.log(hashPw)

      //db에 저장
      const insertQuery = "INSERT INTO user (nickname, username, password, phone, email ,Manager) VALUES (?,?,?,?,?,?)"
      const values = [nickname, username, hashPw, phone, email, Manager]
      await connection.query(insertQuery, values)
      await connection.commit()
      return res.json({
        success : true,
        message : "회원가입 완료"
      })
  }catch(e) {
    console.log(e)
  }finally {
    if(connection) {
      await connection.release();
    }
  }

}


module.exports = signup;