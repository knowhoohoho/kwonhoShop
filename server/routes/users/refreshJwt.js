const {sign, verify , refreshVerify} = require('../../auth/jwt');
const jwt = require('jsonwebtoken');


const refresh = async (req, res) =>{
  const accessToken = req.headres.authorizationTo
  const refreshToken = req.headres.refresh;

  if(accessToken && refreshToken) {
    //accessToken 검사
    const authResult = verify(accessToken);
    const decoded = jwt.decode(accessToken);

    
    if(!decoded) {
      res.json({
        results : false,
        message : "accessToken x"
      })
    }
    console.log(decoded)
    const refreshResult = refreshVerify(refreshToken, decoded.id);


    if(authResult.success == false && authResult.message === 'jwt expired') {
        if(refreshResult.succe ===false) {
          res.status(401).json({
            success :false,
            message: 'No authorized!',
          })
        } else {
       // 2. access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access token을 발급
       const newAccessToken = sign(user);
        
       res.status(200).json({
         success: true,
         data : {
           accessToken : newAccessToken,
           refreshToken,
         }
       })
    }
    } else {
      res.status(400).send({
        ok: false,
        message: 'Acess token is not expired!',
      });
    }
  }else {
    res.status(400).send({
      ok: false,
      message: 'Access token and refresh token are need for refresh!',
    });
  }
}

module.exports = refresh;