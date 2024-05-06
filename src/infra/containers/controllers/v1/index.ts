import { InitialController } from "@/application/controllers/v1/initial/InitialController";
import { Controller } from "@/infra/protocols/controller";
import { container } from "tsyringe";

container.registerSingleton<Controller>('CInitialController', InitialController)