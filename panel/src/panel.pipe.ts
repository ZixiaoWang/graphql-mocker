export const GRAPHQL_ONLY = (networkRequest: chrome.devtools.network.Request): boolean => {
    const request = networkRequest.request;
    const url: URL = new URL(request.url);
    const method: string = request.method;

    if (method === "POST" && url.pathname === "/graphql") {
        // console.log(networkRequest)
        return true;
    }

    return false;
}