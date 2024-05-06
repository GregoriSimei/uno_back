import env from 'env-var'

export const applicationConfig = Object.freeze({
    port: env.get('PORT').asInt()
})