const router = require('express').Router();
const userRouter = require('./users');
const shopRouter = require('./shops');



router.use('/users', userRouter)
router.use('/shop', shopRouter)





module.exports = router;