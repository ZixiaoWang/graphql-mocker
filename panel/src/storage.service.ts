import { BaseService } from "./base.service";
import { MockedResponseConfig, MockedResponseMeta } from "./interfaces/index.interface";

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