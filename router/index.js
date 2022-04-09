const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.home)

router.use(controller.notFound)
router.use(controller.exception)

const dashboard = require('./dashboard')
router.use('/dashboard', dashboard)

const auth = require('./auth')
router.use('/auth', auth)

module.exports = router