const router = require('express').Router();
const { categoriesController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', authMiddleware, categoriesController.addNewCategory);

module.exports = router;