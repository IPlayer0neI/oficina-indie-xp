import styles from "./index.module.css"

export function Background() {
    return (
        <div className={styles.background}>
            <div className={styles["shortcut"]}>
                <img src="./icon.png" />
                <div className={styles["shortcut-label"]}>
                    Oficina indie
                </div>
            </div>
            <div className={styles["shortcut"]}>
                <img src="./assets/app-icons/background/backgroundexplorer.png" />
                <div className={styles["shortcut-label"]}>
                    internet explorer
                </div>
            </div>
            <div className={styles["shortcut"]}>
                <img src="./assets/app-icons/background/minesweeper.png" />
                <div className={styles["shortcut-label"]}>
                    Minesweeper
                </div>
            </div>
            <div className={styles["shortcut"]}>
                <img src="./assets/app-icons/background/winamp.png" />
                <div className={styles["shortcut-label"]}>
                    Winamp
                </div>
            </div>
        </div>
    )
}