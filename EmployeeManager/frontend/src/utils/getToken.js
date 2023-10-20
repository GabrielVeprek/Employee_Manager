import axios from "axios";
export function getToken() {
    return  localStorage.getItem('jwt');
}
export function createHeader(token) {
    if (token) {
        return {'Authorization': `Bearer ${token}`};
    }
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

export async function putAuthenticatedResult(URL,data) {
    const token = getToken();
    const headers = createHeader(token);
    return await axios.put(URL, data, {headers} );
}

export async function deleteAuthenticatedResult(URL) {
    const token = getToken();
    const headers = createHeader(token);
    return await axios.delete(URL, {headers} );
}