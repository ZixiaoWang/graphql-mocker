import { h } from "preact";

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

    const contentRowProps = editable ? {className: "json-row-content", contentEditable: true} : {className: "json-row-content"};

    return (
        <div className="json-editor">
            {jsonRows.map((row: string, index: number) => {
                return (
                    <div className="json-row" onChange={event => console.log(event)}>
                        <div className="json-row-index">{index+1}</div>
                        <div {...contentRowProps}>{row}</div>
                    </div>
                )
            })}
        </div>
    )
}
