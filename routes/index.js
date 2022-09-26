const router = require('express').Router();



const homeRouter = require('./homes')
const userRouter = require('./users');
const shopRouter = require('./shops');


router.use('/', homeRouter)
router.use('/users', userRouter)
router.use('/shop', shopRouter)





module.exports = router;