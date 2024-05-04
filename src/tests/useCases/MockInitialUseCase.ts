import { IInitialUseCase } from "@/application/useCases/v1/InitialUseCase/IInitialUseCase";

export class MockInitialUseCase implements IInitialUseCase {
    async execute(): Promise<string> {
        return 'test'
    }
}