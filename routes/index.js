const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const dashboard = require('./dashboard');
const auth = require('./auth');

router.get('/', controller.home);

router.use(controller.notFound);
router.use(controller.exception);
router.use('/dashboard', dashboard);
router.use('/auth', auth);

module.exports = router;