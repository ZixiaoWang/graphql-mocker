import { BaseService } from "./base.service";
import { MockedResponseConfig, MockedResponseMeta } from "./interfaces/index.interface";
import { mockService } from "./mock.service";
import { getQueryName } from "./panel.helper";

declare global {
    interface Window {
        storageService: StorageService
    }
}

export class StorageService extends BaseService {
    cache: MockedResponseMeta = {}
    domain: string = "";

    constructor() {
        super();
        window.storageService = this;
    }

    init(domain: string) {
        this.domain = domain;

        chrome.storage.local.get(this.domain, (item) => {
            this.cache = item[this.domain] || {};
        });

        Object
            .keys(this.cache)
            .forEach((urlAndQuery: string) => {
                const [url, queryString] = urlAndQuery.split("::");
                const mockedResponse: string = this.cache[urlAndQuery].value || "{}";
                const queryName = getQueryName(JSON.parse(queryString)?.query);

                if (queryName) {
                    mockService.mockQuery(queryName, mockedResponse);
                }
            });
    }

    hasCacheByKey(key: string): boolean {
        return Boolean(this.cache[key]);
    }

    updateCacheByKey(key: string, value: any, config?: MockedResponseConfig): void {
        this.cache[key] = {
            value,
            config
        };

        chrome.storage.local.set({
            [this.domain]: this.cache
        });

        const [url, queryString] = key.split("::");
        const queryName = getQueryName(JSON.parse(queryString)?.query);
        if (queryName) {
            mockService.mockQuery(queryName, value);
        }
    }

    getCacheByKey(key: string): string | null {
        if (this.cache[key]) {
            return this.cache[key].value || "";
        }
        return null;
    }

    removeCacheByKey(key: string) {
        delete this.cache[key];
        chrome.storage.local.remove(key);
    }

    clear() {
        this.cache = {};
        chrome.storage.local.clear();
    }
}

export const storageService: StorageService = new StorageService();