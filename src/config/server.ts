import '../infra/containers'

import express from 'express'
import http from 'http'
import { setupRoutes } from './routes'
import { applicationConfig } from './env/applicationConfig'

const app = express()

setupRoutes(app)

const server: http.Server = http.createServer(app)
server.listen(applicationConfig.port, () => {
    console.log(`Server is running in the port ${applicationConfig.port}!`)
})