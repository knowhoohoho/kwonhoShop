const router = require('express').Router();
const myshop = require('./myshop')
const shopRegistration = require('./shopRegistration')
const authToken = require('../../utils/auth');



router.get('/myshop', authToken, myshop);
router.get('/shopRegistration', authToken, shopRegistration);




module.exports = router;