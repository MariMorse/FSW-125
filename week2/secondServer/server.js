const express = require("express")
const app = express()

const presidents = [
    { name: 'Jimmy Carter'},
    { name: 'Ronald Regan'},
    { name: 'George Washington'},
    { name: 'John F. Kennedy'}

]

const books = [
    { name: 'The Diary Of a Young Girl', autor: 'Anne Frank'},
    { name: 'War and Peace', author: 'Leo Tolstoy'},
    { name: 'To Kill A Mockingbird', autor: 'Harper Lee'},
    { name: 'Pride and Prejudice', autor: 'Jane Austen'},
    { name: 'Davide Copperfield', autor: 'Charles Dickens'}
]

const countries = [
    { name: "Germany"},
    { name: "Eygpt"},
    { name: "Italy"},
    { name: "Ireland"}

]

app.get('/presidents', (req, res) => {
    res.send(presidents);
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/countries', (req, res) => {
    res.send(countries);
});

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});