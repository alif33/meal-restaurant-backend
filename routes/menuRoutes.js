const router = require('express').Router();
const { 
    getCategories, 
    addCategory,
    updateCategory,
    dropCategory,
    addProduct,
    updateProduct,
    deleteProduct,
    Importer, 
    Deletation

 } = require("../controller/menuController");



router.get('/menu/categories', getCategories);
router.post('/menu/category', addCategory);
router.put('/menu/category', updateCategory);
router.delete('/menu/category', dropCategory);

router.post('/menu/product', addProduct);
router.put('/menu/product', updateProduct);
router.delete('/menu/product', deleteProduct);

router.post('/menu/import', Importer);
router.post('/menu/drop', Deletation);

module.exports = router;

