const express = require("express")
const app = express()


app.use(express.json())
app.use('/bounties', require('./routes/bountyrouter'))






app.listen(5000, () => {
    console.log("Bounty Express Router is running on 5000")
})