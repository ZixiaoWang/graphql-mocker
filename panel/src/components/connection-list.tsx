import { Fragment, h } from "preact";
import { GraphqlRequestBody } from "../interfaces/index.interface";
import { getQueryName } from "../panel.helper";

export interface ConnectionListProp {
    compact: boolean,
    connections: Array<chrome.devtools.network.Request>,
    onClick: (connection: chrome.devtools.network.Request) => void,
}

export const ConnectionList = ({ compact, connections, onClick }: ConnectionListProp) => {
    if (connections.length === 0) {
        return (
            <div>There's no Graphql Reqeusts</div>
        )
    }

    const onClickHandler = (connection: chrome.devtools.network.Request) => {
        if (onClick && typeof onClick) {
            onClick(connection);
        }
    }

    return (
        <Fragment>
            <table className="connection-list" frameBorder={1}>
                <thead>
                    <th>Status</th>
                    <th>Query</th>
                    {compact && <th>Size</th>}
                    {compact && <th>Time</th>}
                </thead>
                <tbody>
                    {
                        connections.map((connection: chrome.devtools.network.Request, index: number) => {
                            const { request, response, time } = connection;
                            const graphqlRequestBodyText: string = request.postData?.text || "{}";
                            const graphqlRequestBody: GraphqlRequestBody = JSON.parse(graphqlRequestBodyText);
                            return (
                                <tr className="connection-list-item" 
                                    onClick={() => onClickHandler(connection)}>
                                    <td>{response.status}</td>
                                    <td>{getQueryName(graphqlRequestBody.query) || graphqlRequestBody.query_hash}</td>
                                    {compact && <td>{response.content.size}</td>}
                                    {compact && <td>{time}</td>}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Fragment>
    )
}