const express = require("express")
const app = express()


app.use('/', express.json())
app.use('todos', require('./routes/todoExpress'))





app.listen( 7000, () => {
    console.log("Server is running on Port 7000")
})