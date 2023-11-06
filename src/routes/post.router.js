const router = require('express').Router();
const { postController } = require('../controllers');
const { authMiddleware, postValidate } = require('../middlewares');

router.post('/', authMiddleware, postValidate.NewPostValidade, postController.addNewBlogPost);

router.get('/', authMiddleware, postController.getAllBlogPosts);

router.get('/:id', authMiddleware, postController.getBlogPostById);

router.put('/:id', authMiddleware, postValidate.putPostValidade, postController.updateBlogPost);

module.exports = router;