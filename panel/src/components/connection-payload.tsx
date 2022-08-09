import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { getQueryName, getStorageKeyByConnection } from "../panel.helper";
import { storageService } from "../storage.service";
import { JSONEditor } from "./json-editor";

export interface ConnectionPayloadProps {
    editable?: boolean,
    connection: chrome.devtools.network.Request,
}

export const ConnectionPayload = (props: ConnectionPayloadProps) => {
    const { editable, connection } = props;
    const key: string = getStorageKeyByConnection(connection);
    const [content, setContent] = useState("{}");
    const [mockedContent, setMockedContent] = useState(content);
    const [ifMock, setIfMock] = useState(storageService.hasCacheByKey(key));

    useEffect(() => {
        connection.getContent((content: string) => {
            setContent(content);
            setMockedContent(content);
        })
    }, [connection]);

    const onMockResponseToggleHandler = (event: Event) => {
        const mock: boolean = !ifMock;
        if (mock) {
            if(storageService.hasCacheByKey(key)) {
                const presistedMockedContent: string = storageService.getCacheByKey(key) || "{}";
                setMockedContent(presistedMockedContent);
            } else {
                storageService.updateCacheByKey(key, content);
                setMockedContent(content);
            }
        } else {
            setMockedContent(content);
        }
        setIfMock(mock);
    }

    const onMockContentChangeHandler = (mockedContentString: string) => {
        try {
            storageService.updateCacheByKey(key, mockedContentString);
            setMockedContent(mockedContentString);
        } catch (e) {
            console.error(e);
        }
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
                <JSONEditor 
                    editable={editable && ifMock} 
                    json={mockedContent}
                    onChange={onMockContentChangeHandler}
                />
            </div>
        </div>
    )
}
