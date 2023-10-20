import {HttpStatusCode} from "axios";

export function error401Handler() {
    if (HttpStatusCode.Unauthorized) {
        return true
    }
}