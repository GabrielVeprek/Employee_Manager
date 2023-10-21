import {Buffer} from "buffer";
export function setTokenToHeader(user) {
    const headers = new Headers();
    const auth = Buffer.from(user.username + ':' + user.password).toString('base64');
    headers.set('Authorization', 'Basic ' + auth);
    return headers
}