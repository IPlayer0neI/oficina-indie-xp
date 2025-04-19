import { Window } from "../Windows7Components/Window/Window";
import styles from "./index.module.css"

export function Border() {
    return (
        <div className={styles.borderContainer}>
            <Window windowText="Tem mais!!!">
                <progress style={{ width: "100%" }} max="100" value="70"></progress>
            </Window>
        </div>
    )
}