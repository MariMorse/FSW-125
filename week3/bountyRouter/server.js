const express = require("express")
const app = express()


app.use('/', express.json())
app.use('/bounties', require('./routes/bountyRouter'))






app.listen(5000, () => {
    console.log("Bounty Express Router!!")
})