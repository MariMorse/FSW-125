const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    first_Name: "Asajj",
    last_Name: "Ventress",
    isAlive: true,
    bount_amount: 15,
    type: "Sith",
    _id: uuidv4(),
  },

  {
    first_Name: "Aurra",
    last_Name: "Sing",
    isAlive: true,
    bount_amount: 13,
    type: "Jedi",
    _id: uuidv4(),
  },
];

bountyRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })

  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(`You added ${newBounty.fName} to the database!`);
  });

bountyRouter
  .route("/:bountyId")
  .get((req, res) => {
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find((bounty) => bounty._id === bountyId);
    res.send(foundBounty);
  })

  .put((req, res) => {
    const bountyId = req.params.bountyId;
    const bountiesIndex = bounties.findIndex(
      (bounties) => bounties._id === bountyId
    );
    const updateBounty = Object.assign(bounties[bountiesIndex], req.body);
    res.send(updateBounty);
  })
  .delete((req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(
      (bounties) => bounties._id === bountyId
    );
    bounties.splice(bountyIndex, 1);
    res.send("You have deleted a bounty!!");
  });

module.exports = bountyRouter;