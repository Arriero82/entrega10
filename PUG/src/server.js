const express = require('express')
const products = require('./products/products')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use('/', products)

const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`listening in port ${server.address().port}`);
})