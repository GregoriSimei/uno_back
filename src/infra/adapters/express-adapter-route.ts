
import { Controller } from '@/application/protocols/controller'
import { HttpRequest } from '@/application/protocols/http'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.headers) {
      res.set(httpResponse.headers)
    }
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}