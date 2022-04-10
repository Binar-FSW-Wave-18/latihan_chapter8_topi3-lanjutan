const router = require ('express').Router()
const { Dashboard } = require("../Controllers")
const layoutName = (req,res,next) => {
    res.locals.layout = `${layoutName}`
    next()
}
const authenticate = (req,res,next) => {
    if (req.isAuthenticated()) {return next()}
    res.redirect('/auth/login')
}

router.use(authenticate)
router.use(layoutName('dashboard'))
router.get("/", Dashboard.home)
router.post("/post", Dashboard.post.index)


module.exports = router