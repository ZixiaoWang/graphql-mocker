import { h, render } from "preact";
import { useState } from "preact/hooks";
import { ConnectionDetail, ConnectionList } from "./components";
import { GRAPHQL_ONLY } from "./panel.pipe";
import { panelService, PanelService, usePanelService } from "./panel.service";

import "./panel.scss";
import { storageService } from "./storage.service";

const DevtoolsPanelApp = () => {
    const [focusedConnection, setFocusedConnection] = useState<chrome.devtools.network.Request | null>(null);
    const panelService: PanelService = usePanelService();

    const graphqlReqeusts = panelService.pipe(GRAPHQL_ONLY);

    const onItemClickHandler = (selectedConnection: chrome.devtools.network.Request): void => {
        setFocusedConnection(selectedConnection)
    }

    const onDetailPanelCloseHandler = () => {
        setFocusedConnection(null)
    }

    return (
        <div className="connection">
            <ConnectionList 
                compact={!Boolean(focusedConnection)}
                connections={graphqlReqeusts} 
                onClick={onItemClickHandler}
            />
            {
                focusedConnection && 
                <ConnectionDetail
                    key={focusedConnection._request_id}
                    connection={focusedConnection} 
                    onClose={onDetailPanelCloseHandler}
                />
            }
        </div>
    )
}

render(<DevtoolsPanelApp />, document.getElementById("root") as HTMLDivElement);
storageService.init("testing");

chrome.devtools.network
    .onRequestFinished
    .addListener((networkRequest: chrome.devtools.network.Request) => {
        panelService.push(networkRequest);
    });