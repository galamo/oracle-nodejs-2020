console.log("Api Script start")
const express = require("express")
const bodyParser = require("body-parser")

const { router: moviesRouter } = require("./routes/movies")
const { router: ticketsRouter } = require("./routes/movies")

require("dotenv").config()

const { PORT, SECRET } = process.env
const variables = ["PORT", "SECRET"]

function validateEnvs() {
    variables.map((envParam) => {
        if (!process.env[envParam]) console.log('\x1b[36m%s\x1b[0m', `missing env param: ${envParam}`)
    })
}
validateEnvs()
const app = express();
const secretToken = SECRET

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    console.log(`${req.ip}`)
    if (secretToken === req.query.token) {
        next()
    } else {
        res.status(401).send("No permissions")
    }
})

app.use("/movies", moviesRouter)
app.use("/tickets", ticketsRouter)


app.use((err, req, res, next) => {
    console.log("middleware error")
    console.log(err.message)
    res.send(err.message)
})

app.listen(PORT, () => {
    console.log("Server is running")
})







