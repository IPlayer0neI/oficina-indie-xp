import styles from "./index.module.css"

export function BuyButton() {
    return (
        <a className={styles.buyButtonContainer}>
            <div className={styles.trasnparentBorder} />
            <button className={styles.buyButton}>
                    QUERO COMEÇAR AGORA
            </button>
        </a>
    )
}