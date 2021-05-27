const express = require('express');
const morgan = require('morgan');
const app = express();

//Middleware
app.use('/', express.json());
app.use(morgan('dev'));

//Routes
app.use('/plants', require('./routes/thingFinder'));

app.use((err, req, res, next) => {
    console.log(err);

    return res.send({
        errMsg: err.message,
    });
});

//Server Listen
app.listen(3000, () => {
    console.log('The server is listening on port 3000')
});