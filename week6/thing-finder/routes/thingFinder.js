const express = require('express')
const thingFinder = express.Router();
const { v4: uuidv4 } = require('uuid');

const plants = [
    {
        name: 'rose',
        type: 'flower',
        price: 20,
        _id: uuidv4()
    },
    {
        name: 'lavender',
        type: 'herb',
        price: 12,
        _id: uuidv4()
    },
    {
        name: 'daisies',
        type: 'flower',
        price: 2,
        _id: uuidv4()
    },
    {
        name: 'buttonbush',
        type: 'flower',
        price: 5,
        _id: uuidv4()
    },
    {
        name: 'sage',
        type: 'herb',
        price: 3,
        _id: uuidv4()
    },
    {
        name: 'garlic',
        type: 'herb',
        price: .75,
        _id: uuidv4()
    }
]

thingFinder.get('/', (req, res) => {
    res.send(plants)
});

thingFinder.get('search/type', (req, res) => {
    const type = req.query.type
    const filteredPlants = filteredPlants.filter(items => items.type === type)
    res.status(200).send(filteredPlants)
})


module.exports = thingFinder