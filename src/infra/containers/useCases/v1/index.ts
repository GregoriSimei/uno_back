import { IInitialUseCase } from "@/application/useCases/v1/InitialUseCase/IInitialUseCase";
import { InitialUseCase } from "@/application/useCases/v1/InitialUseCase/InitialUseCase";
import { container } from "tsyringe";

container.registerSingleton<IInitialUseCase>('IInitialUseCase', InitialUseCase)