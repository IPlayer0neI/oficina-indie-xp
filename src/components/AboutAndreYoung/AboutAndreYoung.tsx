import { useDivMeasures } from "@/hooks/useDivMeasures";
import { BulletsStatusBar } from "../CarouselComponents/BulletsWindow/BulletsStatusBar/BulletsStatusBar"
import { Window } from "../Windows7Components/Window/Window"
import { AndreYoungGamesCarousel } from "./AndreYoungGamesCarousel/AndreYoungGamesCarousel"
import styles from "./index.module.css"
import { useCarousel } from "@/hooks/useCarousel";
import { RefObject } from "react";

const itemsLonely = [
    ["9Kings.png", "9 Kings"],
    ["seraphs-last-stand-1.webp", "Seraph's Last Stand"],
    ["ending-tau.webp", "Ending Tau"],
    ["gods-of-sand-1.webp", "Gods of Sand"]
]
const duplicateItems = itemsLonely.concat(itemsLonely);

export function AboutAndreYoung() {
    const { refMeasuresInstance, divWidth, divHeight } = useDivMeasures();
    const gap = divWidth / 6;
    const { position, getFixedPosition, handleNext, handlePrevious, spacingLeftValue } = useCarousel(duplicateItems.length, divWidth + gap);

    return (
        <div className={styles.aboutAndreYoungContainer}>
            <Window
                className={styles.aboutAndreYoung}
                innerWindowClassName={styles.innerWindow}
                statusBar={
                    <BulletsStatusBar length={itemsLonely.length} position={position} />
                }
                location={["Oficina indie", "sobre o andrezitos gameplays"]}
                windowText="Sobre o andrezitos"
            >
                <div className={styles.andreYoungDescriptionContainer}>
                    <div className={styles.andreYoungImgContainer}>
                        <img src="assets/various/Foto_Andre.png" />
                    </div>
                    <div className={styles.andreYoungDescription}>
                        <h1 className={`textShine ${styles.andreYoungTitle}`}>
                            Aprenda com quem faz!
                        </h1>
                        <p className={styles.andreYoungParagraph}>
                            Com quase 10 anos de experiência em desenvolvimento de jogos, já lancei jogos para PC, consoles e mobile, e hoje em dia mantenho minha empresa de criação de jogos, a Sad Socket, atualmente com três projetos ativos. Alguns dos jogos que já criei e projetos que estou envolvido são:
                        </p>
                    </div>
                </div>
                <AndreYoungGamesCarousel
                    refMeasuresInstance={refMeasuresInstance as RefObject<HTMLDivElement>}
                    divHeight={divHeight}
                    position={position}
                    getFixedPosition={getFixedPosition}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    spacingLeftValue={spacingLeftValue}
                    duplicateItems={duplicateItems}
                />
            </Window>
        </div>
    )
}