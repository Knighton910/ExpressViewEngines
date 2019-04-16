const express = require('express')
const path = require('path')

const app = express()

/** @desc: tells Express that any file ending in (.ejs)
 * should be rendered with the (ejs) engine/package
 * */
app.set('view engine', 'ejs')
// lets Express know where the views folder is
app.set('views', path.resolve(__dirname, 'views'))

// a hit to this endPoint will yield the index.ejs code
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)
