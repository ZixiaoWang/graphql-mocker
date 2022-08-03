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
    const [ifMock, setIfMock] = useState(false);

    const onMockResponseToggleHandler = (event: Event) => {
        setIfMock(!ifMock);
    }

    return (
        <div className="connection-payload">
            { editable && (
                <div className="connection-payload-controls">
                    <label htmlFor="mock" class="connection-payload-control">
                        <input type="checkbox" name="mock" id="mock" checked={ifMock} onChange={onMockResponseToggleHandler}/>
                        <span>Mock response</span>
                    </label>
                </div>
            )}
            <div className="connection-payload-panel">
                <JSONEditor editable={editable && ifMock} json={payload}/>
            </div>
        </div>
    )
}
