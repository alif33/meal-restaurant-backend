const router = require('express').Router();
const { 
    getUsers,
    signin, 
    register,
    forgetPasswrd,
    updatePassword
} = require('../controller/authController');
const { isAuthenticate } = require('../middlewire/common');

router.get('/users', getUsers);
router.post('/signin', signin);
router.post('/user/register', register);
router.post('/forget-password', forgetPasswrd);
router.put('/update-password', isAuthenticate, updatePassword);

module.exports = router;