const router = require('express').Router();
const { postController } = require('../controllers');
const { authMiddleware, postValidate } = require('../middlewares');

router.post('/', authMiddleware, postValidate, postController.addNewBlogPost);

router.get('/', authMiddleware, postController.getAllBlogPosts);

router.get('/:id', authMiddleware, postController.getBlogPostById);

module.exports = router;