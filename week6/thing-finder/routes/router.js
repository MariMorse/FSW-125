const express = require('express')
const router = express.Router()

const listItems = [
    {
        name: 'milk',
        type: 'food',
        amount: .5
    },
    {
        name: 'paper towels',
        type: 'household',
        amount: 3
    },
    {
        name: 'wine',
        type: 'food',
        amount: 5
    },
    {
        name: 'bleach',
        type: 'household',
        amount: 2
    },
    {
        name: 'bread',
        type: 'food',
        amount: 1
    },
    {
        name: 'chocolate',
        type: 'food',
        amount: 6
    }
]

router.route('/')
    .get((req, res) => {
        res.send(listItems)
    })

router.route('/food')
    .get((req, res) => {
        
    })