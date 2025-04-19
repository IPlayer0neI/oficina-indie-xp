import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.css"
import { Window } from "@/components/Windows7Components/Window/Window";
import { CommandPrompt } from "@/components/Windows7Components/Commandprompt/CommandPrompt";

interface CardProps {
    imgName: string;
    title: string;
    children: ReactNode;
    style?: CSSProperties;
    contentPathName: string;
}

export function Card({ imgName, title, children, style, contentPathName }: CardProps) {
    return (
        <div style={{ ...style, minWidth: "460px", minHeight: "0" }}>
            <Window  className={styles.windowClass} windowText={contentPathName}>
                <p className={styles.cardHeader}>
                    <img className={styles.imgCard} src={`assets/various/${imgName}`}/>
                    <span className={styles.cardTitle}>{title}</span>
                </p>
            </Window>
            <CommandPrompt className={styles.CommandPromptStyle}>
                <p className={styles.cardParagraph}>
                C:&#92;WINDOWS&#92;SYSTEM&#92;{title}&#10095;
                    {" "}
                    {children}
                </p>
            </CommandPrompt>
        </div>
    )
}