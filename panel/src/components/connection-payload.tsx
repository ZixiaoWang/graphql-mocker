import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { JSONEditor } from "./json-editor";

export interface ConnectionPayloadProps {
    editable?: boolean,
    payload: string,
}

export const ConnectionPayload = (props: ConnectionPayloadProps) => {
    const { editable, payload } = props;
    const [showRawPayload, setShowRawPayload] = useState(false);

    return (
        <div className="connection-payload">
            { editable && (
                <div className="connection-payload-controls">
                    
                </div>
            )}
            <div className="connection-payload-panel">
                <JSONEditor json={payload}/>
            </div>
        </div>
    )
}
