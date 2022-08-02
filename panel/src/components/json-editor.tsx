import { h } from "preact";

interface JSON {
    [key: string]: string | number | boolean | JSON | string[] | number[] | boolean[] | JSON[]
}

export interface JSONEditorProps {
    json: string | JSON,
    disabled?: boolean,
    onChange?: (jsonString: string) => void,
}

export const JSONEditor = (props: JSONEditorProps) => {
    const { json, disabled, onChange} = props;
    const jsonString = typeof json === "string" ? JSON.stringify(JSON.parse(json), null, 4) : JSON.stringify(json, null, 4);
    const jsonRows = jsonString?.split(/\r?\n|\\n/g).map(row => row.replace(/\s/g, '\u00A0')) || [""];

    return (
        <div className="json-editor">
            {jsonRows.map((row: string, index: number) => {
                return (
                    <div className="json-row" onChange={event => console.log(event)}>
                        <div className="json-row-index">{index+1}</div>
                        <div className="json-row-content" contentEditable={true}>{row}</div>
                    </div>
                )
            })}
        </div>
    )
}
