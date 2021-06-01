const express = require('express')
const router = express.Router()

const items = [
    {
        name: 'kiwi',
        type: 'fruit',
        color: 'green',
        amount: 1.75
    },
    {
        name: 'pineapple',
        type: 'fruit',
        color: 'yellow',
        amount: 3.50
    },
    {
        name: 'grapes',
        type: 'fruit',
        color: 'purple',
        amount: 2.99
    },
    {
        name: 'brussel sprouts',
        type: 'vegetable',
        color: 'green',
        amount: .50
    },
    {
        name: 'squash',
        type: 'vegetable',
        color: 'orange',
        amount: 1.50
    },
    {
        name: 'tomato',
        type: 'vegetable',
        color: 'red',
        amount: 2.25
    }
]

router.route('/')
    .get((req, res) => {
        res.send(items)
    })

router.route('/fruit')
    .get((req, res) => {
        let filteredItems = items.filter(item => item.type === 'fruit')

        if (req.query.color !== undefined) {
            filteredItems = filteredItems.filter(item => item.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/vegetable')
    .get((req, res) => {
        let filteredItems = items.filter(item => item.type === 'vegetable')

        if (req.query.color !== undefined) {
            filteredItems = filteredItems.filter(item => item.color === req.query.color)
        }
        res.send(filteredItems)
    })

router.route('/search/price')
    .get((req, res) => {
        const amount = req.query.amount
        const filteredItems = items.filter(item => item.amount === Number(amount))
        res.send(filteredItems)
    })

module.exports = router