import EHttpStatusCode from "../protocols/EHttpStatusCode";
import { HttpResponse } from "../protocols/http";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function responseOk<T>(body: T, headers?: any): HttpResponse {
    return {
        body,
        statusCode: EHttpStatusCode.OK,
        headers
    }
}