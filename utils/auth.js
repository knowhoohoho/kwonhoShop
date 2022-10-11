const {verify} = require('../auth/jwt');


const authToken = (req,res,next) => {
  const token = req.headers['authorizationto'];
  if(token) {
    const result = verify(token);
    if(result.success === true) {
      console.log('success')
      req.id = result.id;
      next();
    }else {
      res.status(401).json({
        results :false,
        message :'로그인이 필요합니다.'
      })
    }
  }
}

  module.exports = authToken;



