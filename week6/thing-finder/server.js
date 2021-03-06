const express = require('express')
const morgan = require('morgan')
const app = express()

// Middleware 
app.use('/', express.json())
app.use(morgan('dev'))

// Routes
app.use('/items', require('./routes/router'))

// Server Listen
app.listen(9000, () => {
    console.log('The server is listening on port 9000!');
});