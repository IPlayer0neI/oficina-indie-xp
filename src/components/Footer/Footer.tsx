import styles from "./index.module.css"

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerApps}>
                <img src="./assets/taskbar-added-images/start.png" className={styles.start} />
                <div className={styles.app}>
                    <img src="./icon.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Oficina indie
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarexplorer.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Internet explorer
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarminesweeper.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Minesweeper
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarwinamp.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Winamp
                    </div>
                </div>
            </div>
            <div className={styles.tray}>
                <img src="./assets/taskbar-added-images/soundBox.png" className={styles.trayItem} />
                <img src="./assets/taskbar-added-images/arrow.png" className={styles.trayItem} />
                <img src="./assets/taskbar-added-images/shieldX.png" className={styles.trayItem} />
                <div className={styles.time}>
                    08: 26
                </div>
            </div>
        </div >
    )
}