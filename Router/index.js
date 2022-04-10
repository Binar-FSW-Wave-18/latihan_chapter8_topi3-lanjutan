const router = require ('express').Router()
const Controller = require("../Controllers")



router.get("/", Controller.home)

router.use(Controller.notFound )
router.use(Controller.exception)

const dashboard = require("./dashboard")
router.use("/dashboard", dashboard)

const auth = require("./auth")
router.use("/auth", auth)




module.exports = router