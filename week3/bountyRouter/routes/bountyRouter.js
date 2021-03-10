const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid/v4")



let hunter = {
    firstName: "Lord Darth",
    lastName: "Sion",
    living:  yes,
    bountyAmount: 35,
    type: "Sith",
     
}


applicationCache.use("/", require("./routes/bountyRouter.js.js"))



bountyRouter.get("/", req, res => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) =>{
    const newHunter = req.body
    newHunter._id = uuid()
    hunter.push(newHunter)

})







module.exports = bountyRouter