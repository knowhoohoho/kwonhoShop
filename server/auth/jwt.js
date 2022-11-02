const jwt = require('jsonwebtoken');
const db = require('../models');


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
    try {
    const results = await db.token.findOne({
      where :{id : userid, content : token},
    })
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