const router = require('express').Router();
const authToken = require('../../utils/auth');
const mainHome = require('./home');
const bookMark = require('./bookmark')
const cbcLookup = require('./climbingLookup');

router.get('/', mainHome); //main 홈
router.get('/shopMark', authToken,  bookMark);   
router.get('/cbcLookup', cbcLookup) // 클라이밍 찾기




module.exports = router;