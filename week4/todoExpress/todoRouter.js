const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todoItems = [
    {
        "name": "Exercise",
        "description": "Run 2 miles",
        "imageUrl": "https://www.pinclipart.com/pindetail/ihRmb_person-running-runner-free-running-clip-art-clipartllection/",
        "completed": true,
        "_id": uuidv4()},
        
]