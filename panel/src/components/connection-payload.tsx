import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { getQueryName } from "../panel.helper";
import { stroageService } from "../storage.service";
import { JSONEditor } from "./json-editor";

export interface ConnectionPayloadProps {
    editable?: boolean,
    connection: chrome.devtools.network.Request,
}

export const ConnectionPayload = (props: ConnectionPayloadProps) => {
    const { editable, connection } = props;
    const [content, setContent] = useState("{}");
    const [mockedContent, setMockedContent] = useState(content);
    const [ifMock, setIfMock] = useState(false);

    const key: string = [connection.request.url, connection.request.postData?.text || ""].filter(Boolean).join("::");

    useEffect(() => {
        connection.getContent((content: string) => {
            setContent(content);
        })
    }, [connection]);

    const onMockResponseToggleHandler = (event: Event) => {
        const mock: boolean = !ifMock;
        if (mock) {
            stroageService.updateCacheByKey(key, content);
            setMockedContent(content);
        } else {
            stroageService.removeCacheByKey(key);
        }
        setIfMock(mock);
    }

    const onMockContentChangeHandler = (mockedContentString: string) => {
        try {
            const mockedResponse: any = JSON.parse(mockedContentString);
        } catch (e) {}
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
                    json={content}
                    onChange={onMockContentChangeHandler}
                />
            </div>
        </div>
    )
}
