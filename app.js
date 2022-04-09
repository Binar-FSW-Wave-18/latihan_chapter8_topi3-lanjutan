const express = require('express')
const app = express()
const port = 3000
const expressLayout = require('express-ejs-layouts')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayout)

app.use(expressLayout)
app.set('layout', 'layouts/default')

const router = require('./router')
app.use(router)

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

const setDefault = (req, res, next) => {
    res.locals.contentName = 'Default'
next()}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})