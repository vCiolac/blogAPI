const router = require('express').Router();
const { loginController } = require('../controllers');
const { LoginValidate } = require('../middlewares');

router.post('/', LoginValidate, loginController.handleLogin);

module.exports = router;