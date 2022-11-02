const router = require('express').Router();
const login = require('./login');
const register = require('./register');
const refresh = require('./refreshJwt')
const  authToken  = require('../../utils/auth');
const { profile, modifyProfile} = require('./profile');
const {kakaooLogin, kakaoToken} = require('./kakao')



router.post('/login', login)
router.post('/signup', register)
router.post('/profile', authToken, profile)
router.get('/profile', authToken, modifyProfile)
router.post('/refresh', refresh)
router.get('/kakaoLogin', kakaooLogin) 
router.post('/kakao/oauth/redirect', kakaoToken)


module.exports = router;
