const { StatusCodes } = require("http-status-codes")

class CustomAPIError extends Error{
    constructor(message){
        super(message)
        this.statusCode  = statusCode
    }
}
module.exports = CustomAPIError