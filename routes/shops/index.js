const router = require('express').Router();
const myshop = require('./myshop')
const shopRegistration = require('./shopRegistration')



router.use('/myshop', myshop);
router.use('/shopRegistration', shopRegistration )



module.exports = router;