import { Controller } from "@/application/protocols/controller"
import { adaptRoute } from "@/infra/adapters/express-adapter-route"
import { Router } from "express"
import { container } from "tsyringe"

const initialController = container.resolve<Controller>('CInitialController')

export default (router: Router): void => {
    router.get('/v1/initial', adaptRoute(initialController))
}