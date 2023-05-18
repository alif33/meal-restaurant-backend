const router = require('express').Router();
const { signup, signin } = require('../controller/admin/auth');
const { uploadImage } = require('../controller/uploadController');
const upload = require("../utils/multer");
const { isAuthenticate } = require('../middlewire/common');

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.post('/upload', upload.single("image"), uploadImage);


module.exports = router;