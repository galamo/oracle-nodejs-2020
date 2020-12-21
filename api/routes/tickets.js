const express = require("express")
const router = express.Router();
router.get("/", (req, res, next) => {
    res.send(`Tickets Api result`)
})

module.exports = { router }