const express = require("express")
const app = express()

app.get("/animals", (req, res) => {
    res.send(animals);

})

const animals = [
    {name: "sloth"},
    {name: "mountain gorilla"},
    {name: "proboscis monkey"},
    {name: "king cobra"}
]



app.listen(4000, () => {
    console.log("This isn't working")
})