import { Controller } from "@/infra/protocols/controller";
import { HttpRequest, HttpResponse } from "@/infra/protocols/http";
import { IInitialUseCase } from "@/application/useCases/v1/IInitialUseCase";
import { inject, injectable } from "tsyringe";
import { responseOk } from "@/infra/adapters/responses";

@injectable()
export class InitialController implements Controller {
    constructor(
        @inject('IInitialUseCase')
        private initialUseCase: IInitialUseCase
    ) {}

    async handle(_: HttpRequest): Promise<HttpResponse> {
        const result = await this.initialUseCase.execute()
        return responseOk(result)
    }
}