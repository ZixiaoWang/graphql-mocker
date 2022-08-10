import { h, JSX } from "preact";

interface JSON {
    [key: string]: string | number | boolean | JSON | string[] | number[] | boolean[] | JSON[]
}

export interface JSONEditorProps {
    json: string | JSON,
    editable?: boolean,
    onChange?: (jsonString: string) => void,
}

export const JSONEditor = (props: JSONEditorProps) => {
    const { json, editable, onChange} = props;
    const jsonString = typeof json === "string" ? JSON.stringify(JSON.parse(json), null, 4) : JSON.stringify(json, null, 4);
    const jsonRows = jsonString?.split(/\r?\n|\\n/g).map(row => row.replace(/\s/g, '\u00A0')) || [""];

    const onMockedResponseChangeHandler = (event: Event) => {
        console.log(event)
        const newValue: string = (event.target as any).value || "";
        if (onChange && typeof onChange === "function") {
            onChange(newValue);
        }
    }

    if (editable) {
        return (
            <div className="json-editor">
                <textarea 
                    className="json-content-editor" 
                    name="json-content-editor" 
                    id="jsoneditor"
                    onChange={onMockedResponseChangeHandler}
                    value={jsonString}
                />
            </div>
        )
    }

    return (
        <div className="json-editor">
            {jsonRows.map((row: string, index: number) => {
                return (
                    <div className="json-row" onChange={event => console.log(event)}>
                        <div className="json-row-index">{index+1}</div>
                        <div className="json-row-content">{row}</div>
                    </div>
                )
            })}
        </div>
    )
}
