const jwt = require('jsonwebtoken');
const pool = require('../DB/db');



module.exports = {
  sign : (id) => {
    const accessToken = jwt.sign({id}, process.env.JWTKEY, {
      algorithm : 'HS256',
      expiresIn : "1h",
      subject : 'AT'
    })
    const refreshToken = jwt.sign({id}, process.env.JWTKEY, {
      algorithm : 'HS256',
      expiresIn : "12d",
      subject : "RT"
    })
    return {
      accessToken,
      refreshToken
    }
    
  },
  verify: (token) => {
    let decoded = null ;
   try{
       decoded =  jwt.verify(token, process.env.JWTKEY);
    return {
      success : true,
      id : decoded.id,
    }

   }catch(e) {
    return {
      success : false,
      message : e.message
    }
   }
  },
  refresh: () => {
    return jwt.sign({}, process.env.JWTKEY, {
      algorithm : 'HS256',
      expiresIn : "14d",
    })
  },
  refreshVerify : async (token, userid) => {
    let connection;
    try {
      
      connection = await pool.getConnection();
     const [results] = await connection.query('SELECT * FROM usertoken where id =? and content =?', [userid, token]);
     console.log(results)
     if(!results) {return {results : false, message :'올바른 유저가 아닙니다.'}}
     return {success :true}; 


    }catch (e) {
      console.log(e)
    }finally {
      if(connection){
        connection.release();
      }
    }
  }
}