const router = require('express').Router();
const shopController = require('./controller/userController');
const userConnection = require('./middleware/user');



router.get('/myshop', userConnection,  shopController.myShop )


router.post('/shopRegistration', async (req,res,next) => {
  const userData = req.userIn;
  const user = jwt.verify(userData);
  if(!user) throw userCheck;
  

})



module.exports = router;