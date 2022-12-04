const express = require("express")
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(path.resolve('./dist')))

app.get('*', function (req, res) {
    res.sendFile(path.resolve('./dist', 'index.html'))
})

app.listen(PORT, () => { console.log('Listening on', PORT) })