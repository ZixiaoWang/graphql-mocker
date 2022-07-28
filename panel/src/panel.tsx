import { h, render } from "preact";
import { useState } from "preact/hooks";
import { ConnectionDetail, ConnectionList } from "./components";
import { GRAPHQL_ONLY } from "./panel.pipe";
import { panelService, PanelService, usePanelService } from "./panel.service";

import "./panel.scss";

const DevtoolsPanelApp = () => {
    const [focusedConnection, setFocusedConnection] = useState<chrome.devtools.network.Request | null>(null);
    const panelService: PanelService = usePanelService();

    const graphqlReqeusts = panelService.pipe(GRAPHQL_ONLY);

    const onItemClickHandler = (selectedConnection: chrome.devtools.network.Request): void => {
        setFocusedConnection(selectedConnection)
    }

    return (
        <div className="connection">
            <ConnectionList 
                compact={Boolean(focusedConnection)}
                connections={graphqlReqeusts} 
                onClick={onItemClickHandler}
            />
            {
                focusedConnection && 
                <ConnectionDetail connection={focusedConnection} />
            }
        </div>
    )
}

render(
    <DevtoolsPanelApp />,
    document.getElementById("root") as HTMLDivElement
);

chrome.devtools.network
    .onRequestFinished
    .addListener((networkRequest: chrome.devtools.network.Request) => {
        panelService.push(networkRequest);
    });