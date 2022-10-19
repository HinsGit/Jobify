import { StatusCodes } from "http-status-codes"
import CustomerAPIError from "./custom-api.js"


class NotFoundAPIError extends CustomerAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.NOT_FOUND
    }
}

export default NotFoundAPIError