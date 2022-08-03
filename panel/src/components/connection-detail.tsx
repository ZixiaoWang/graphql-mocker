import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ConnectionRequest } from ".";
import { ConnectionHeader } from "./connection-header";
import { ConnectionPayload } from "./connection-payload";
import { ConnectionSetting } from "./connection-setting";

export interface ConnectionDetailProp {
    connection: chrome.devtools.network.Request,
    onClose: () => void,
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


export const ConnectionDetail = ({ connection, onClose }: ConnectionDetailProp) => {
    const { request, response } = connection;
    const [focusedTab, setFocusedTab] = useState("HEADERS");

    const onTabClickHandler = (label: string) => {
        setFocusedTab(label);
    }

    return (
        <div className="connection-detail">
            <div className="connection-detail-tabs">
                <div className="connection-detail-tab is-close" onClick={onClose}>
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
                { focusedTab === "PAYLOAD" && <ConnectionRequest payload={request.postData?.text || "{}"} />}
                { focusedTab === "RESPONSE" && <ConnectionPayload editable={true} connection={connection} />}
                { focusedTab === "SETTINGS" && <ConnectionSetting />}
            </div>
        </div>
    )
}