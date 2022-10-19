import { StatusCodes } from "http-status-codes"
import CustomerAPIError from "./custom-api.js"


class BadRequestAPIError extends CustomerAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}

export default BadRequestAPIError