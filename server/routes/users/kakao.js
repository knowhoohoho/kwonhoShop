const axios = require('axios');

 const kakaooLogin = (req, res) => {
  const baseUrl = "https://kauth.kakao.com/oauth/authorize";
  const config = {
    client_id: process.env.KAKAO_CLIENT_ID,
    redirect_uri: process.env.KAKAO_REDIRECT,
    response_type: "code",
  };
  const params = new URLSearchParams(config).toString();
  console.log(params)

  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};


const kakaoToken =  async (req,res,next) => {
  const baseUrl = "https://kauth.kakao.com/oauth/token";
  const config = {
    client_id: process.env.KAKAO_CLIENT_ID,
    client_secret: process.env.KAKAO_CLIENT_SECRET,
    grant_type: "authorization_code",
    redirect_uri: process.env.KAKAO_REDIRECT,
    code: req.query.code,
  }
  const params = new URLSearchParams(config).toString();

  const finalUrl = `${baseUrl}?${params}`;

  const kakaoTokenRequest = await axios.post(finalUrl, {
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const kakaoToken = await kakaoTokenRequest.data;
  console.log('aa' ,kakaoToken)


  res.json({data : kakaoToken})


}




module.exports = { kakaooLogin, kakaoToken}