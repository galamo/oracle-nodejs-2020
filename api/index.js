console.log("Api Script start")
const express = require("express")

const app = express();

let numberOfRequest = 0;
const secretToken = "1234"


app.use((req, res, next) => {
    console.log(req.path, numberOfRequest)
    console.log(`${req.ip}`)
    if (secretToken === req.query.token) {
        next()
    } else {
        res.status(401).send("No permissions")
    }
})

app.get("/movies", (req, res, next) => {
    numberOfRequest++;
    res.send(`Movies Api result ${numberOfRequest}`)
})

app.get("/tickets", (req, res, next) => {
    numberOfRequest++;
    res.send(`Tickets Api result ${numberOfRequest}`)
})




app.listen(4500, () => {
    console.log("Server is running")
})





