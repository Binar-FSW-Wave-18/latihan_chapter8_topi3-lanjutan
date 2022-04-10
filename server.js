const express = require("express")
const app = express()
const { port = 8000} = process.env
const expressLayouts = require("express-ejs-layouts")

app.use("/public", express.static('public'))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(expressLayouts)
app.set('layout', 'layouts/default')


const setdefault = (req,res,next) => {
res.locals.contentName = "Default"
    next()
}

const router = require("./Router")
app.use(router)
// app.get("/" ,setdefault,(req,res) => {
//     res.render("default")
// })


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)

})