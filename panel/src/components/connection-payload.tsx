import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { JSONEditor } from "./json-editor";

export interface ConnectionPayloadProps {
    type: "REQUEST" | "RESPONSE",
    payload: string,
}

export const ConnectionPayload = (props: ConnectionPayloadProps) => {
    const { payload } = props;
    const [showRawPayload, setShowRawPayload] = useState(false);

    return (
        <div className="connection-payload">
            <div className="connection-payload-controls">
                Reqeust Payload
            </div>
            <div className="connection-payload-panel">
                <JSONEditor json={payload}/>
            </div>
        </div>
    )
}
