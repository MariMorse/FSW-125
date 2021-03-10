const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')



const bounties = {
    firstName: "Lord Darth",
    lastName: "Sion",
    living:  true,
    bountyAmount: 35,
    type: "Sith",
    _id: uuidv4()
}

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
})


.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`You added ${newBounty.fName } to the database!`)
})







module.exports = bountyRouter