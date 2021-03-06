const express = require('express');
const morgan = require('morgan');
const app = express()

app.use('/', express.json());
app.use(morgan('dev'));

app.use('/spiders', require('./routes/router'));

app.listen(5000, () => {
    console.log('The server is listening on port 8000.');
})