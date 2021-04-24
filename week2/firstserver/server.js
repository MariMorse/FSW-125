const express = require("express")
const app = express()

const animals = [
    {name: "sloth"},
    {name: "mountain gorilla"},
    {name: "proboscis monkey"},
    {name: "king cobra"}
]

app.get("/animals", (req, res) => {
    res.send(animals);

})

const countries = [
    {name: "Germany"},
    {name: "Eygpt"},
    {name: "Italy"},
    {name: "Ireland"}

]

app.get("/countries", (req, res) => {
    res.send(countries);
})

const presidents = [
    {name: "Jimmy Carter"},
    {name: "Ronald Regan"},
    {name: "George Washington"},
    {name: "John F. Kennedy"}

]

app.get("/presidents", (req, res) => {
    res.send(presidents);
})

const hstoricalEvents = [
    {name: "Pearl Harbor", date: "December 1941"},
    {name: "Assasination of John F. Kennedy", date: "1963"},
    {name: "Fall of Berlin Wall", date: "1989"},
    {name: "Atomic bomb dropped", date: "August 1945"}

]

app.get("/historicalEvents", (req, res) => {
    res.send(hstoricalEvents);
})

app.listen(4000, () => {
    console.log("This is working")
});