const router = require('express').Router();
const { 
    getUsers,
    signin, 
    register,
    makePermissions,
    updateUser,
    deleteUsers,
    forgetPasswrd,
    updatePassword
} = require('../controller/authController');
const { isAuthenticate } = require('../middlewire/common');

router.get('/users', getUsers);
router.post('/signin', signin);
router.post('/user/register', register);
router.put('/user', updateUser);
router.put('/user/permission', makePermissions);
router.delete('/user', deleteUsers);
router.post('/forget-password', forgetPasswrd);
router.put('/update-password', isAuthenticate, updatePassword);

module.exports = router;