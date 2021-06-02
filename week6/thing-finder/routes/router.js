const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {
        name: 'rose',
        type: 'flower',
        color: 'yellow',
        price: 20,
        _id: uuidv4()
    },
    {
        name: 'lavender',
        type: 'herb',
        color: 'purple',
        price: 12,
        _id: uuidv4()
    },
    {
        name: 'daisies',
        type: 'flower',
        color: 'pink',
        price: 2,
        _id: uuidv4()
    },
    {
        name: 'buttonbush',
        type: 'flower',
        color: 'white',
        price: 5,
        _id: uuidv4()
    },
    {
        name: 'sage',
        type: 'herb',
        color: 'green',
        price: 3,
        _id: uuidv4()
    },
    {
        name: 'garlic',
        type: 'herb',
        color: 'white',
        price: .75,
        _id: uuidv4()
    }
]
router.route("/")
    .get((req,res) => {
    res.send(items)
})

router.route("/search/type")
    .get((req, res) => {
        let type = req.query.type
        console.log(type)
        let filteredItems = items.filter(item => item.type === type)
        res.send(filteredItems)
})
module.exports = router