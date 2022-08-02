import { h } from "preact";

export const ConnectionSetting = () => {

    const onButtonClickHandler = () => {
        const message: string = "Setting button + " + Date.now().toString();
        chrome.devtools.inspectedWindow.eval(
            `
                console.log("message comes from panel setting");
                console.log(window.ah);
            `
        )
    }

    return (
        <div className="connection-setting">
            <button onClick={onButtonClickHandler}>Send message</button>
        </div>
    )
}