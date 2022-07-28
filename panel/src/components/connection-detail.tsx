import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ConnectionHeader } from "./connection-header";
import { ConnectionPayload } from "./connection-payload";

export interface ConnectionDetailProp {
    connection: chrome.devtools.network.Request
}

const tabs = [{
    label: "Headers", 
    value: "HEADERS",
}, {
    label: "Payload", 
    value: "PAYLOAD",
}, {
    label: "Response", 
    value: "RESPONSE",
}, {
    label: "Settings", 
    value: "SETTINGS",
}];


export const ConnectionDetail = ({ connection }: ConnectionDetailProp) => {
    const { request, response } = connection;
    const [focusedTab, setFocusedTab] = useState("HEADERS");
    const [content, setContent] = useState("{}");

    useEffect(() => {
        connection.getContent((content: string) => {
            setContent(content);
        })
    }, []);

    const onTabClickHandler = (label: string) => {
        setFocusedTab(label);
    }

    return (
        <div className="connection-detail">
            <div className="connection-detail-tabs">
                <div className="connection-detail-tab is-close">
                ╳
                </div>
                {
                    tabs.map((tab: { label: string, value: string}, index: number) => {
                        return (
                            <div key={index}
                                className="connection-detail-tab" 
                                onClick={() => onTabClickHandler(tab.value)}>
                                {tab.label}
                            </div>
                        )
                    })
                }
            </div>
            <div className="connection-detail-panel">
                { focusedTab === "HEADERS" && <ConnectionHeader requestHeaders={request.headers} responseHeaders={response.headers} />}
                { focusedTab === "PAYLOAD" && <ConnectionPayload type="REQUEST" payload={request.postData?.text || "{}"} />}
                { focusedTab === "RESPONSE" && <ConnectionPayload type="RESPONSE" payload={content} />}
            </div>
        </div>
    )
}