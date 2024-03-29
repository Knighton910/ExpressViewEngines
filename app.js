const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

app.locals.appName = 'Song Lyrics'

app.set('view engine', 'jade')
app.set('views', path.resolve(__dirname, 'views'))
app.engine('html', ejs.renderFile)

app.use((req, res, next) => {
    res.locals.userAgent = req.headers['user-agent']
    next()
})

app.get('/about', (req, res) => {
    res.render('about', {
        currentUser: 'india-arie123'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.use((req, res) => {
    res.staus(404)
    res.render('404.html', {
        urlAttempted: req.url
    })
})

app.listen(3000)
