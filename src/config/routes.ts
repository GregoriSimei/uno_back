import { Express, Router } from 'express'
import { join } from 'path'
import recursiveReaddir from 'recursive-readdir'

export async function setupRoutes(app: Express): Promise<void> {
  const router = Router()
  app.use('/uno-api', router)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recursiveReaddir(join(__dirname, '/../application/routes'), async (_: any, files: any) => {
    for (const file of files) {
      if (!file.endsWith('.map')) {
        ;(await import(`${file}`)).default(router)
      }
    }
  })
}