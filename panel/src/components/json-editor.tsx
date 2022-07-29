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
    const jsonString = typeof json === "string" ? JSON.stringify(JSON.parse(json), null, 2) : JSON.stringify(json, null, 2);
    const jsonRows = jsonString.replace(/\s/g, '\u00A0').split(/\r?\n|\\n/) || [""];

    return (
        <div className="json-editor">
            {jsonRows.map((row: string, index: number) => {
                return (
                    <div className="json-row">
                        <div className="json-row-index">{index+1}</div>
                        <div className="json-row-content">{row}</div>
                    </div>
                )
            })}
        </div>
    )
}
