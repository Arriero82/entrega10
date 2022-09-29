const express = require('express')
const products = require('./products/products')
const app = express()
const hbs = require('express-handlebars')

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layout1.hbs'
}))

app.use(express.static(__dirname + '/public'))

app.set('views', './views');
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', products)

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`listening in port ${server.address().port}`);
})