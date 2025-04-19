import { CommandPrompt } from "@/components/Windows7Components/Commandprompt/CommandPrompt"
import { BuyButton } from "../BuyButton/BuyButton"
import styles from "./index.module.css"

export function BuyArea() {
    return (
        <div className={styles.buyArea}>
            <div className={styles.priceContainer}>
                <h2 className={styles.price}>
                    <CommandPrompt className={styles.tag}>
                        C:&#92;WINDOWS&#92;SYSTEM&#92;price&#10095;
                        {" "}
                        POR APENAS
                    </CommandPrompt>
                    <span className={styles.amount}>
                        R$149
                        <span className={styles.cents}>
                            ,90
                        </span>
                    </span>
                    <span className={styles.subdivision}>
                        ou em 12 vezes de R$14,90
                    </span>
                </h2>
            </div>
            <BuyButton />
        </div>
    )
}