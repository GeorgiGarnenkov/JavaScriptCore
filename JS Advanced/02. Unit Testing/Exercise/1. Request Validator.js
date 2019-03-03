function validateRequest(obj) {

    let objMethod = obj.method;
    let objUri = obj.uri;
    let objVersion = obj.version;
    let objMessage = obj.message;

    let uriRegex = /^([a-zA-Z0-9\.]+)$/g;
    let messageRegex = /^([^\<\>\\\&\'\"\n]*)$/g;

    if (objMethod !== 'GET' &&
        objMethod !== 'POST' &&
        objMethod !== 'DELETE' &&
        objMethod !== 'CONNECT' ||
        objMethod === undefined) {

        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!uriRegex.test(objUri) &&
        objUri !== '*' ||
        objUri === undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (objVersion !== 'HTTP/0.9' &&
        objVersion !== 'HTTP/1.0' &&
        objVersion !== 'HTTP/1.1' &&
        objVersion !== 'HTTP/2.0' ||
        objVersion === undefined) {

        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!messageRegex.test(objMessage) ||
        objMessage === undefined) {
            
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

let test1 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
let test2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};
let test3 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'

};

console.log(validateRequest(test1));