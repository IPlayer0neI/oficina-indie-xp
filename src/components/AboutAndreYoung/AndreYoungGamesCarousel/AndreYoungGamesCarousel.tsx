import { Showcase } from "../../CarouselComponents/Showcase/Showcase"
import styles from "./index.module.css"
import { RefObject, useCallback } from "react";
import { ArrowButton } from "@/components/CarouselComponents/Arrows/ArrowButtons/ArrowButtons";

interface AndreYoungGamesCarouselProps {
    refMeasuresInstance: RefObject<HTMLDivElement>;
    divHeight: number;
    position: number; 
    getFixedPosition: (index: number) => number; 
    handleNext: () => void;
    handlePrevious: () => void; 
    spacingLeftValue: (index: number) => void;
    duplicateItems: string[][];
}

export function AndreYoungGamesCarousel({ 
    refMeasuresInstance,
    divHeight,
    getFixedPosition,
    handleNext,
    handlePrevious,
    spacingLeftValue,
    duplicateItems
}: AndreYoungGamesCarouselProps) {
    const carouselItemStyle = useCallback(function (index: number): (string | void) {
        const fixedPosition = getFixedPosition(index);

        if (((fixedPosition < 0 || fixedPosition > 2))) {
            return styles.itemHidden;
        }
    }, [getFixedPosition])

    return (
        <div className={styles.andreYoungGamesCarousel}>
            <Showcase
                items={duplicateItems}
                height={divHeight}
                spacingLeftValue={spacingLeftValue}
                carouselItemStyle={carouselItemStyle}
                refMeasuresInstance={refMeasuresInstance}
                itemStyle={styles.carouselItemStyle}
                imgBasePath="andre-young-games"
            />
            <ArrowButton handleNext={handleNext} handlePrevious={handlePrevious}/>
        </div>
    )
}