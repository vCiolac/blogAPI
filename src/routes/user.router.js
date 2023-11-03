const router = require('express').Router();
const { userController } = require('../controllers');
const { userValidate, authMiddleware } = require('../middlewares');

router.post(
  '/',
  userValidate.userValidateDisplayAndEmail,
  userValidate.userValidatePswdAndExists,
  userController.postUser,
);

router.get('/', authMiddleware, userController.getAllUsers);

router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;