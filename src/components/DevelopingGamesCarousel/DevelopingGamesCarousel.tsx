import styles from "./index.module.css"
import { PerspectiveCarousel } from "../PerspectiveCarousel/PerspectiveCarousel";

const items = ["screen0.webp", "screen0606.webp", "screen6896.webp", "screen7984.webp", "screen86896.webp"]

export function DevelopingGamesCarousel() {
    return (
        <div className={styles.developingGamesCarouselContainer}>
            <div className={styles.developingGamesCarousel}>
                <PerspectiveCarousel items={items} bottomPosition="-3rem" imgBasePath="developing-games" />
            </div>
        </div>
    )
}