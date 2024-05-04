import { Controller } from "@/application/protocols/controller";
import { HttpRequest, HttpResponse } from "@/application/protocols/http";

export class InitialController implements Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}