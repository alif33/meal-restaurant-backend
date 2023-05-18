const router = require('express').Router();
const { 
    getRoles,
    addRoles,
    updatePermissions
} = require("../controller/rolesController");

router.get('/roles', getRoles);
router.post('/role', addRoles);
router.put('/role/permission', updatePermissions);

module.exports = router;
