const router = require('express').Router();
const { 
    getUsers,
    signin, 
    register
} = require('../controller/authController');
const { isAuthenticate } = require('../middlewire/common');

router.get('/users', getUsers);
router.post('/signin', signin);
router.post('/user/register', register);

// router.post('/upload', upload.single("image"), uploadImage);


module.exports = router;