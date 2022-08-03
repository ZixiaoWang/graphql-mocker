import { useEffect, useState } from "preact/hooks";
import { BaseService } from "./base.service";

declare global {
    interface Window {
        panelService: PanelService
    }
}

type FilterFunction<T> = (value: T, index: number, array: T[]) => boolean;

export class PanelService extends BaseService {
    private connections: chrome.devtools.network.Request[] = [];

    constructor() {
        super();
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