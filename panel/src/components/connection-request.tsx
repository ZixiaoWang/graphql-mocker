import { h } from "preact";
import { JSONEditor } from "./json-editor";

export interface ConnectionRequestProps {
    payload: string,
}

export const ConnectionRequest = (props: ConnectionRequestProps) => {
    const { payload } = props;

    return (
        <div className="connection-payload">
            <div className="connection-payload-panel">
                <JSONEditor json={payload}/>
            </div>
        </div>
    )
}
