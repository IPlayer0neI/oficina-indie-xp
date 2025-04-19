import { CSSProperties, JSX, ReactElement } from "react"

type BarControls = ("minimize" | "help" | "restore" | "close" | "maximize")[];

function renderBarControls(barControls: BarControls) {
    function hasValue(control: string) {
        return barControls.findIndex((c) => c == control) > -1;
    }

    return (
        (
            <div className="title-bar-controls">
                {hasValue("help") && <button aria-label="Help"></button>}
                {hasValue("minimize") && <button aria-label="Minimize"></button>}
                {hasValue("maximize") && <button aria-label="Maximize"></button>}
                {hasValue("close") && <button aria-label="Close"></button>}
            </div>
        )
    )
}

interface WindowProps {
    children?: JSX.Element[] | JSX.Element | boolean;
    scrollBar?: boolean;
    className?: string;
    innerWindowClassName?: string;
    innerOverflow?: boolean;
    windowText?: string;
    windowHeadElement?: ReactElement;
    statusBar?: ReactElement;
    width?: string;
    style?: CSSProperties;
    barControls?: BarControls;
    location?: string[];
}

export function Window({
    children,
    statusBar,
    windowText,
    style,
    windowHeadElement,
    className = "",
    innerWindowClassName = "",
    width,
    innerOverflow = true,
    barControls = ["minimize", "maximize", "close"]
}: WindowProps) {
    return (
        <div className={`window ${className}`} style={{ width: width, ...style }}>
            <div className="title-bar">
                <div className="title-bar-text">
                    <img src="./icon.png"
                        style={{
                            width: "15px",
                            height: "15px",
                            float: "left",
                            marginRight: "5px"
                        }} />
                    {windowHeadElement || windowText}
                </div>
                {
                    renderBarControls(barControls)
                }
            </div>
            <div className={`window-body has-space ${innerWindowClassName}`} style={{ overflow: innerOverflow ? "auto" : "visible" }}>
                {children || null}
            </div>
            {statusBar}
        </div>
    )
}