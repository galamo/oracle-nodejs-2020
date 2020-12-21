const express = require("express")
const router = express.Router();
const searchHandler = require("../handlers/search")
const { getValidation } = require("../validations")

router.get("/:name/:size", getValidation("search"), (req, res, next) => {
    console.log(typeof searchHandler.searchMovies)
    // next(new Error("this is error in getMovies"))
    const result = searchHandler.searchMovies(req.params.name)
    return res.json(result)
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