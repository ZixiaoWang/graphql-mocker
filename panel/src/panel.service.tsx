import { useEffect, useState } from "preact/hooks";

declare global {
    interface Window {
        panelService: PanelService
    }
}

type FilterFunction<T> = (value: T, index: number, array: T[]) => boolean;

export class PanelService {
    private callbacks: Set<Function> = new Set();
    private connections: chrome.devtools.network.Request[] = [];

    constructor() {
        window.panelService = this;
    }

    push(connection: chrome.devtools.network.Request): void {
        this.connections.push(connection);
        this.notify();
    }

    pipe(...pipes: FilterFunction<chrome.devtools.network.Request>[]): chrome.devtools.network.Request[] {
        let filteredConnections = this.connections;

        for (const pipe of pipes) {
            filteredConnections = filteredConnections.filter(pipe);
        }

        return filteredConnections;
    }

    register(callback: Function): void {
        this.callbacks.add(callback);
    }

    unregister(callback: Function): void {
        this.callbacks.delete(callback);
    }

    notify(...args: any[]): void {
        this.callbacks.forEach((callback: Function) => {
            if (callback && typeof callback === "function") {
                if (args.length === 0) {
                    callback(Math.random());
                } else {
                    callback(...args);
                }
            }
        })
    }
}

export const panelService = new PanelService();

export const usePanelService = () => {
    const [_, setNounce] = useState();

    useEffect(() => {
        panelService.register(setNounce);
        return () => panelService.unregister(setNounce);
    }, []);

    return panelService;
}