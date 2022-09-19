const {sign, verify , refreshVerify} = require('./jwt');
const jwt = require('jsonwebtoken');


const refresh = async (req, res) =>{
  const accessToken = req.headres.authorizationTo
  const refreshToken = req.headres.refresh;

  if(accessToken && refreshToken) {
    const authResult = verify(accessToken);
    const decoded = jwt.decode(accessToken);
    const refreshResult = refreshVerify(refreshToken, decoded.id);
  }
  



}
