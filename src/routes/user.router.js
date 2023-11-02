const router = require('express').Router();
const { userController } = require('../controllers');
const { userValidate } = require('../middlewares');

router.post(
  '/',
  userValidate.userValidateDisplayAndEmail,
  userValidate.userValidatePswdAndExists,
  userController.postUser,
);

module.exports = router;