import 'reflect-metadata'

import { beforeAll, describe, expect, it } from 'vitest'
import { IInitialUseCase } from './v1/IInitialUseCase'
import { InitialUseCase } from './v1/InitialUseCase'

interface Stub {
    useCase: IInitialUseCase
}

let testCase: Stub

describe('InitialUseCase', () => {
    beforeAll(() => {
        testCase = { 
            useCase: new InitialUseCase()
        }
    })

    it('Should return "Hello World !"', async () => {
        const result =  await testCase.useCase.execute()
        expect(result).toBe('Hello World !')
    })
})