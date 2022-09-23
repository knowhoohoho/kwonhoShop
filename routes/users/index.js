const router = require('express').Router();
const login = require('./login');
const register = require('./register');
const refresh = require('./refreshJwt')
const  authToken  = require('../../utils/auth');
const { profile, modifyProfile} = require('./profile');



router.post('/login', login)
router.post('/register', register)
router.post('/profile', authToken, profile)
router.get('/profile', authToken, modifyProfile)
router.post('/refresh', refresh)


module.exports = router;
