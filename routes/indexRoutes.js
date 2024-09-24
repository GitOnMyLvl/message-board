const express = require('express');
const indexController = require('../controllers/indexController')
const router = express.Router();

router.get('/', indexController.index);
router.get('/message/:id', indexController.openMessage);

module.exports = router;
