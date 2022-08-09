export const getQueryName = (queryString: string | undefined): string | null => {
    if (!queryString) {
        return null;
    }

    return queryString
        .split("{")[0]
        .split("(")[0]
        .trim()
        .split(" ")[1] || null;
}

export const getStorageKeyByConnection = (connection: chrome.devtools.network.Request): string => {
    return [connection.request.url, connection.request.postData?.text || ""].filter(Boolean).join("::");
}