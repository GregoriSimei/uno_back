import { injectable } from "tsyringe";
import { IInitialUseCase } from "./IInitialUseCase";

@injectable()
export class InitialUseCase implements IInitialUseCase {
    async execute(): Promise<string> {
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII", `${process.env.VAR_TEST}`)
        return `Hello World !`
    }
}