import { BaseService } from "./base.service";

declare global {
    interface Window {
        mockService: MockService
    }
}

class MockService extends BaseService {
    cache: Set<string> = new Set();

    constructor() {
        super();
        window.mockService = this;
    }

    hasMockedQuery(query: string): boolean {
        return this.cache.has(query);
    }

    hasQueryMocked = this.hasMockedQuery;

    mockQuery(query: string, mockedResponse: string) {
        chrome.devtools.inspectedWindow.eval(`
            window?.ah?.proxyMap?.mockQuery(
                "${query}",
                "${mockedResponse}",
            );
            console.log("%c${query} has been mocked", "color: white; background-color: green; display: inline-block; padding: 2px 4px; border-radius: 4px;");
        `);
        this.cache.add(query);
    }

    unMockedQuery(query: string) {
        chrome.devtools.inspectedWindow.eval(`
            window?.ah?.proxyMap?.mockQuery("${query}");
            console.log("%c${query} has been unmocked", "color: white; background-color: grey; display: inline-block; padding: 2px 4px; border-radius: 4px;");
        `);
        this.cache.delete(query);
    }
}

export const mockService: MockService = new MockService();