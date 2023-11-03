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

module.exports = router;