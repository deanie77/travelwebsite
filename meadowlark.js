const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

var hbs = expressHandlebars.create({
    defaultLayout: 'main',
})

// configure handlebars view engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)

// custom 500 page
app.use(handlers.serverError)


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press ctrl-c to terminate.`
))