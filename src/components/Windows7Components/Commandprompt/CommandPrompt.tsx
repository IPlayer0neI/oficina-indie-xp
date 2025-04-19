import { CSSProperties, ReactNode } from "react";
import { Window } from "../Window/Window";

interface CommandPromptProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export function CommandPrompt({ children, className = "", style }: CommandPromptProps) {
    return (
        <Window className={className} style={{ ...style }} innerOverflow={false} windowText="Command Prompt">
            <pre>
                {children}
            </pre>
        </Window>
    )
} 