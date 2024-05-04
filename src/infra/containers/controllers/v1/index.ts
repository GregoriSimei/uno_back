import { InitialController } from "@/application/controllers/v1/initial/InitialController";
import { Controller } from "@/application/protocols/controller";
import { container } from "tsyringe";

container.registerSingleton<Controller>('CInitialController', InitialController)