import axios from "axios";
export function getToken() {
    return localStorage.getItem('jwt');
}
export function createHeader(token) {
    if (!token) {
        throw {message: "Invalid Token"}
    }
    return {'Authorization': `Bearer ${token}`};
}
export async function getAuthenticatedResult(URL) {
    const token = getToken();
    const headers = createHeader(token);
    return await axios.get(URL, {headers});
}

export async function postAuthenticatedResult(URL,data) {
    const token = getToken();
    const headers = createHeader(token);
    return await axios.post(URL, data, {headers} );
}