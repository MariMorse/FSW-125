const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todoItems = [
    {
        name: "Exercise",
        description: "Run 2 miles",
        imageUrl: "https://www.pinclipart.com/pindetail/ihRmb_person-running-runner-free-running-clip-art-clipartllection/",
        completed: true,
        _id: uuidv4()},

        {
        name: "Make Breakfast/ Eat",
        description: "Blend up morning fruit smoothie",
        imageUrl: "https://alittleinsanity.com/wp-content/uploads/2012/03/Natural-Breakfast-Smoothie-Recipe-Gluten-Free-Vegan-1024x683.jpg",
        completed: true,
        _id: uuidv4()},


]

//GET All

todoRouter.route("/")
    .get((req, res) => {
        res.send(todoItems)
})
//POST one
.post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoItems.push(newTodo)
    res.send(`You have added ${newTodo.name } to the list`)
})
//GET One
todoRouter.route('/:todoId')
.get((req, res) => {
const todoId = req.params.todoId
const foundTodo = todoItems.find(todo => todo._id === todoId)
res.send(foundTodo)

})

.put((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
    const updateTodo = Object.assign(todoItems[todoIndex], req.body)
    res.send(updateTodo)
})
.delete((req, res) => {
    const todoId = req.params.todoId
    const todosIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
    todoItems.splice(todosIndex, 1)
    res.send("You deleted a todo!")
})


module.exports = todoRouter