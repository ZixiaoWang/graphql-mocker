import { h, Fragment, render } from "preact";
import { GRAPHQL_ONLY } from "./panel.pipe";
import { panelService, PanelService, usePanelService } from "./panel.service";

const DevtoolsPanelApp = () => {
    const panelService: PanelService = usePanelService();

    const graphqlReqeusts = panelService.pipe(GRAPHQL_ONLY);

    const onClickHandler = () => {
        window.postMessage(
            "One small step for a man, one gaint leap for the entire human being"
        )
    }

    return (
        <Fragment>
            <h1>Graphql Mocker</h1>
            {
                graphqlReqeusts.map((request) => {
                    return <div onClick={onClickHandler}>
                        <span>{ request.request.url }</span>
                        <span>&nbsp;</span>
                        <span>{ request.request.method }</span>
                        <span>&nbsp;</span>
                        <span>{ request.request.postData?.text }</span>
                    </div>
                })
            }
        </Fragment>
    )
}

render(
    <DevtoolsPanelApp />,
    document.getElementById("root") as HTMLDivElement
);

chrome.devtools.network
    .onRequestFinished
    .addListener((networkRequest: chrome.devtools.network.Request)=>{
        panelService.push(networkRequest);
    });