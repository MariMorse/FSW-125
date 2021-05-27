const express = require('express')
const router = express.Router()

const plants = [
    {
        name: 'rose',
        type: 'flower',
        color: 'yellow',
        amount: 12.99
    },
    {
        name: 'lavender',
        type: 'herb',
        color: 'violet',
        amount: 4.75
    },
    {
        name: 'daisies',
        type: 'flower',
        color: 'blue',
        amount: 2.50
    },
    {
        name: 'buttonbush',
        type: 'flower',
        color: 'white',
        amount: 5.00
    },
    {
        name: 'sage',
        type: 'herb',
        color: 'green',
        amount: 3.15
    },
    {
        name: 'garlic',
        type: 'herb',
        color: 'white',
        amount: .75
    }
]

router.route('/')
    .get((req, res) => {
        res.send(plants)
    })// Get All

router.route('/flower')
    .get((req, res) => {
        let filteredItems = plants.filter(plant => plant.type === 'flower')

        if(req.query.color !== undefined) {
            filteredItems = filteredItems.filter(plant => plant.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/herb')
    .get((req, res) => {
        let filteredItems = plants.filter(plant => plant.type === 'herb')

        if(req.query.color !== undefined) {
            filteredItems = filteredItems.filter(plant => plant.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/search/price')
    .get((req, res)=> {
        const amount = req.query.amount
        const filteredItems = plants.filter(plant => plant.amount === Number(amount))
    })

module.exports = router