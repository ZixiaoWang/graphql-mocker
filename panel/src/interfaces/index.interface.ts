type JSONPrimaryValue = null | number | string | boolean;

type JSONValue = JSONPrimaryValue | JSONPrimaryValue[];
interface JSON {
    [key: string]: JSONValue | JSON | JSON[],
}

export interface GraphqlRequestBody {
    query?: string,
    query_hash?: string,
    variable?: any,
}

export interface MockedResponseConfig {
    delay?: number
}
export interface MockedResponseMeta {
    [query: string]: {
        value?: string,
        config?: MockedResponseConfig,
    }
}