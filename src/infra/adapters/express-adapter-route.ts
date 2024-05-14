import { Controller } from '@/infra/protocols/controller'
import { HttpRequest } from '@/infra/protocols/http'
import { NextFunction, Request, Response } from 'express'
import { errorHandler } from '../handlers/ErrorHandler/errorHandler'

export const adaptRoute = (controller: Controller) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body:    req.body,
      params:  req.params,
      query:   req.query,
      headers: req.headers,
    }

    try {
      const httpResponse = await controller.handle(httpRequest)

      if (httpResponse.headers) {
        res.set(httpResponse.headers)
      }
  
      res.status(httpResponse.statusCode).json(httpResponse.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      await errorHandler(err, req, res, next)
    }
    
    next()
  }
}