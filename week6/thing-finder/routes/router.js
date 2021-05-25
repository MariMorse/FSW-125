const express = require('express')
const router = express.Router()

const items = [
    {
        name: 'strwberry',
        type: 'fruit',
        color: 'red',
        amount: 4.99
    },
    {
        name: 'kiwi',
        type: 'fruit',
        color: 'green',
        amount: .99
    },
    {
        name: 'pineapple',
        type: 'fruit',
        color: 'yellow',
        amount: 1.99
    },
    {
        name: 'brussel sprouts',
        type: 'vegetable',
        color: 'green',
        amount: 2.00
    },
    {
        name: 'cauliflower',
        type: 'vegetable',
        color: 'white',
        amount: 2.50
    },
    {
        name: 'tomato',
        type: 'fruit',
        color: 'red',
        amount: 1.25
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