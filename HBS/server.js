const express = require('express')
const app = express()
const hbs = require('express-handlebars')

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layout1.hbs'
}))

app.set('views', './views');
app.set('view engine', 'hbs')

app.get('/', (req, res) => {    
    res.render('index')
})

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`listening in port ${server.address().port}`);
})