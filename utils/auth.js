const {verify} = require('../auth/jwt');


const userConnection = (req,res,next) => {
  const token = req.headers['authorizationto'];
  if(token) {
    const result = verify(token);
    if(result) {
      req.id = result.id;
      next();
    }
  }else {
    res.status(401).json({
      results :false,
      message :'토큰이 유효하지 않습니다.'
    })
  }
}

  module.exports = userConnection;