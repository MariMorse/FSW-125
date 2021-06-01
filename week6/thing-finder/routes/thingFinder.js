const express = require('express')
const thingFinder = express.Router();
const { v4: uuidv4 } = require('uuid');

const plants = [
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

thingFinder.route("/")
    .get((req,res) => {
    res.send(plants)
})

thingFinder.route('flower')
    .get((req,res) => {
        let filteredPlants = plants.filter(plant => plant.type === 'flower')

        if (req.query.color !== undefined) {
            filteredPlants = filteredPlants.filter(plant => plant.color === req.query.color)
        }
        res.send(filteredPlants)
})

thingFinder.route('herb')
    .get((req,res) => {
        let filteredPlants = plants.filter(plant => plant.type === 'herb')

        if (req.query.color !== undefined) {
            filteredPlants = filteredPlants.filter(plant => plant.color === req.query.color)
        }
        res.send(filteredPlants)
})


/*thingFinder.route("/search/type").get((req, res) => {
    let type = req.query.type
    let filteredPlants = plants.filter(plant => plant.type === type)
    res.send(filteredPlants)
})
*/
module.exports = thingFinder