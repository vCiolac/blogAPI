const router = require('express').Router();
const { postController } = require('../controllers');
const { authMiddleware, postValidate } = require('../middlewares');

router.post('/', authMiddleware, postValidate, postController.addNewBlogPost);

module.exports = router;