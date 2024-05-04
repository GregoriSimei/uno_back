import { injectable } from "tsyringe";
import { IInitialUseCase } from "./IInitialUseCase";

@injectable()
export class InitialUseCase implements IInitialUseCase {
    async execute(): Promise<string> {
        return 'hello word !'
    }
}