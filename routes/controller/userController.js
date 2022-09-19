const userModule = require('../module/user.js')
const jwt = require('../middleware/jwt');


// 회원가입
 exports.register = async (req,res,next) => {
   try {
     req.headres
    const user = req.body;
    const result = await userModule.membership(user);
    console.log('results', result)
    res.json(result)
   }catch(e) {
     next (e)
   }
    
  },

 // 로그인
 exports.login = async (req, res, next) => {
   try{
  const user = req.body;
  const results = await userModule.login(user);
  res.json(results);
   }catch(e) {
    next(e)
   }
  }


  
  exports.myShop = async (req,res, next) => {
    try{
      const user = req.id;
      
    }catch(e) {
      console.log(e)
    }
  }

  exports.logout = async (req,res,next) => {
    try{


    }catch (e) {
      console.log(e);
    }
  }



