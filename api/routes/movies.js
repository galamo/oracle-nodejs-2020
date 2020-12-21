const express = require("express")
const router = express.Router();
const searchHandler = require("../handlers/search")
const { getValidation } = require("../validations")
const axios = require("axios")

router.get("/:name/:size", getValidation("search"), async (req, res, next) => {
    const { name } = req.params;
    const { data } = await axios.get(`${process.env.MOVIES_API}?s=${name}&plot=full&apikey=${process.env.MOVIES_API_SECRET}`)
    // const result = searchHandler.searchMovies(req.params.name, data.Search)
    return res.json(data)
})

router.post("/", isAdmin(), getValidation("movie"), (req, res, next) => {
    console.log(req.body)
    return res.json(req.body)
})

const tokens = {
    gal_user: { roles: ["admin"] }
}

function isAdmin() {
    return (req, res, next) => {
        const { authorization } = req.headers
        const token = tokens[authorization];
        if (!token) return next(new Error("No token"))
        if (token.roles.includes("admin")) return next()
        else {
            next(new Error("Not Authorized"))
        }

    }
}

module.exports = { router }