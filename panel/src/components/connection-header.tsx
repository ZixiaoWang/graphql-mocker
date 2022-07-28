import { Fragment, h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface ConnectionHeaderItem {
    name: string,
    value: string | number
}

export interface ConnectionHeaderProps {
    generalHeaders?: ConnectionHeaderItem[], 
    requestHeaders: ConnectionHeaderItem[],
    responseHeaders: ConnectionHeaderItem[],
}

export const ConnectionHeader = (props: ConnectionHeaderProps) => {
    const [requestHeaderCollapsed, setRequestHeaderCollapsed] = useState(false);
    const [responseHeaderCollapsed, setResponseHeaderCollapsed] = useState(false);
    const { requestHeaders, responseHeaders } = props;

    const renderHeaderDetail = (headers: ConnectionHeaderItem[], ifRender: boolean) => {
        if (!ifRender) return null;

        return (
            <table className="connection-header-body">
                {
                    headers.map((headerItem: ConnectionHeaderItem, index: number) => {
                        return (
                            <tr className="connection-header-item" key={index}>
                                <th className="connection-header-item-name">{headerItem.name}</th>
                                <td className="connection-header-item-value">{headerItem.value}</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }

    return (
        <Fragment>
            <div className="connection-header-group">
                <div className="connection-header-head">
                    Request Header
                </div>
                {renderHeaderDetail(requestHeaders, !requestHeaderCollapsed)}
            </div>
            <div className="connection-header-group">
                <div className="connection-header-head">
                    Response Header
                </div>
                {renderHeaderDetail(responseHeaders, !responseHeaderCollapsed)}
            </div>
        </Fragment>
    )
}