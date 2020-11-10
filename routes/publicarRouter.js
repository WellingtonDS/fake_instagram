var express = require('express');
var router = express.Router();

const AuthController = require("../constrollers/AuthController");

router.get('/post', AuthController.create);
router.post('/post', AuthController.store);

module.exports = router;