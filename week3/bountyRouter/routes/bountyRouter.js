const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid/v4")



let bounties = {
    firstName: "Lord Darth",
    lastName: "Sion",
    living:  true,
    bountyAmount: 35,
    type: "Sith"
    
}

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
})


bountyRouter.route("/")
.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`You added ${newBounty.fName } to the database!`)
})







module.exports = bountyRouter