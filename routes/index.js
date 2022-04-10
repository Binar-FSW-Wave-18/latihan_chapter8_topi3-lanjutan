const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const dashboard = require('./dashboard');

router.get('/', controller.home);

router.use(controller.notFound);
router.use(controller.exception);
router.use('/dashboard', dashboard);

module.exports = router;