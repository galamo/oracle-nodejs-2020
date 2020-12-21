const Joi = require("@hapi/joi")

const searchSchema = Joi.object().keys({
    name: Joi.string().min(2).max(10).required(),
    size: Joi.number().max(10).required()
})

const validationObj = {
    search: (req, res, next) => {
        const { error } = searchSchema.validate(req.params)
        if (error) {
            console.log(error.details)
            return res.send(error.details)
        } else {
            next()
        }
    },
    addMovie: (req, res, next) => {
        const { error } = searchSchema.validate(req.params)
        if (error) {
            console.log(error.details)
            return res.send(error.details)
        } else {
            next()
        }
    }
}


function getValidation(path) {
    const validatorFn = validationObj[path]
    const isValidationExist = typeof validatorFn === "function"
    return isValidationExist ? validatorFn : generalUnsafeCallback
}

function generalUnsafeCallback(req, res, next) {
    console.log('\x1b[33m%s\x1b[0m', `THIS ENTRY POINT IS NOT SAFE ${req.baseUrl + req.url}`);
    next()
}

module.exports = { getValidation }
