const express = require("express")
const bountyrouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    
    {fName: "Asajj",
    lName:  "Ventress",
    isAlive: true,
    number: 15,
    type: "Sith",
    _id: uuidv4()},

    {fName: "Aurra",
    lName: "Sing",
    isAlive: true,
    number: 13,
    type: "Jedi",
    _id: uuidv4()},

    
]



bountyrouter.route("/")
    .get((req, res) => {
        res.send(bounties)
})


.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`You added ${newBounty.fName } to the database!`)
})


bountyrouter.delete("/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex  = bounties.findIndex(bounties => bounties._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("This bounty was deleted")
})


bountyrouter.put("/bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyrouter