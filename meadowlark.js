const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

var hbs = expressHandlebars.create({
    defaultLayout: 'main',
})

// configure handlebars view engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})

// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press ctrl-c to terminate.`
))

const fortunes = [
    'conquer your fears or they will conquer you',
    'rivers need springs',
    'do not fear what you don\'t know',
    'you will have a pleasent surprise',
    'whenever possible, keep it simple',
]