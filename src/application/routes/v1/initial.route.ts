import { adaptRoute } from "@/infra/adapters/express-adapter-route"
import { Router } from "express"

export default (router: Router): void => {
    router.get('/health/readiness', adaptRoute(readinessController))
}