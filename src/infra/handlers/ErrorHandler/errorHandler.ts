import EHttpStatusCode from "@/infra/protocols/EHttpStatusCode"
import { NextFunction, Response, Request } from "express"

export async function errorHandler(
    error: Error,
    _: Request,
    response: Response,
    next: NextFunction
  ) {
    const responseObject = {
      status: EHttpStatusCode.INTERNAL_SERVER_ERROR,
      message: `Internal Server error - ${error.message}`
    }
  
    // if (error instanceof ErrorModel) {
    //   responseObject.message = error.message
    //   responseObject.status = error.status
    // }
  
    response.status(responseObject.status).json({ error: responseObject.message })
  }