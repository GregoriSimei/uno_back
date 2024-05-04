import { IInitialUseCase } from "@/application/useCases/v1/IInitialUseCase";
import { InitialUseCase } from "@/application/useCases/v1/InitialUseCase";
import { container } from "tsyringe";

container.registerSingleton<IInitialUseCase>('IInitialUseCase', InitialUseCase)