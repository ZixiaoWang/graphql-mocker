import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

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
                {payload}
            </div>
        </div>
    )
}
