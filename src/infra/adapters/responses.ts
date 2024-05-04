import { HttpResponse } from "../protocols/http";

export function responseOk<T>(body: T, headers?: any): HttpResponse {
    return {
        body,
        statusCode: 200,
        headers
    }
}