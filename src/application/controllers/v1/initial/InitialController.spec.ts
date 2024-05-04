import 'reflect-metadata'

import { beforeAll, describe, expect, it } from "vitest";
import { IInitialUseCase } from '@/application/useCases/v1/InitialUseCase/IInitialUseCase';
import { container } from 'tsyringe';
import { MockInitialUseCase } from '../../../../tests/useCases/MockInitialUseCase';
import { Controller } from '../../../../infra/protocols/controller';
import { InitialController } from './InitialController';

interface Stub {
    initialUseCase: IInitialUseCase,
    controller: Controller
}

let testCase: Stub

describe('InitialController', () => {
    beforeAll(() => {
        container.register('IInitialUseCase', {
            useClass: MockInitialUseCase
        })

        const initialUseCase = container.resolve<IInitialUseCase>('IInitialUseCase')
        const controller = new InitialController(initialUseCase)

        testCase = {
            initialUseCase,
            controller
        }
    })

    it('Should return a 200 status code', async () => {
        const { controller } = testCase

        const result = await controller.handle({})

        expect(result.statusCode).toBe(200)
    })
})