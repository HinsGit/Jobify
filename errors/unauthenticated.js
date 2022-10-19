
import { StatusCodes } from "http-status-codes"
import CustomerAPIError from "./custom-api.js"


class UnauthenticatedError extends CustomerAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

export default UnauthenticatedError