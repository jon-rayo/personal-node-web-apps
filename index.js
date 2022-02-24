const express = require('express')
const app = express()

//Define the port
const port = process.env.PORT || 8080;

//Define directory where static files will be served to run in the browser.
app.use(express.static(__dirname + '/public'))

app.get('/hello/', (req, res) => {
    app.send('Hello World!')
})

const logMessage = 'Application listening on http://localhost:' + port
app.listen(port, () => {
    console.log(logMessage)
    console.log('..press Ctrl-C to terminate.\n')
})