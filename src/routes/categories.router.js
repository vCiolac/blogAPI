const router = require('express').Router();
const { categoriesController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', authMiddleware, categoriesController.addNewCategory);

router.get('/', authMiddleware, categoriesController.getAllCategories);

module.exports = router;