const express = require('express');
const newController = require('../controllers/newController');
const router = express.Router();

router.get('/new', newController.form);

router.post('/new', newController.postMessage);

module.exports = router;

