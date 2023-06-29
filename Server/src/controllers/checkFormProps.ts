const formBodyCheck = (requiredParams: string[], body: any): boolean | string =>{
    const missingParams: string[] = [];

    requiredParams.forEach(param => {
        if(Array.isArray(body[param])) {
            if(body[param].length < 1) missingParams.push(param);
        }
        if(body[param] === undefined) missingParams.push(param);
    })

    if(missingParams.length > 0) return `Missing the next params: ${missingParams.join(', ')}`;
    else return true;
}

export default formBodyCheck;