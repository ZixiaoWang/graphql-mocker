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