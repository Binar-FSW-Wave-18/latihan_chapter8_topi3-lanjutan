const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const routes = require('./routes');
const { PORT = 8000 } = process.env;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/default');
app.use(routes);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"
    next()
};

app.listen(PORT, () => {
    console.log(`App running well on port ${PORT}`);
});