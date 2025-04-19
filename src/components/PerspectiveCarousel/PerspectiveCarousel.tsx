import styles from "./index.module.css";
import { useCarousel } from "@/hooks/useCarousel";
import { useDivMeasures } from "@/hooks/useDivMeasures";
import { Arrows } from "../CarouselComponents/Arrows/Arrows";
import { RefObject, useCallback } from "react";
import { ShowcaseWindow } from "../CarouselComponents/ShowcaseWindow/ShowcaseWindow";
import { BulletsWindow } from "../CarouselComponents/BulletsWindow/BulletsWindow";

interface PerspectiveCarouselProps {
    items: string[] | Array<Array<string>>;
    customItemEmphasisStyle?: string;
    bottomPosition?: string;
    imgBasePath: string;
}

export function PerspectiveCarousel({ items, customItemEmphasisStyle, bottomPosition, imgBasePath }: PerspectiveCarouselProps) {
    const { refMeasuresInstance, divWidth, divHeight } = useDivMeasures();
    const { position, getFixedPosition, handleNext, handlePrevious, spacingLeftValue } = useCarousel(items.length, divWidth);

    const carouselItemStyle = useCallback(function (index: number): (string | void) {
        const fixedPosition = getFixedPosition(index);

        if (fixedPosition == 1) {
            return `${styles.carouselItEmemphasis} ${customItemEmphasisStyle}`;
        } else if (fixedPosition == 0) {
            return styles.carouselItemLeft;
        } else if (fixedPosition == 2) {
            return styles.carouselItemRight;
        } else if (!((fixedPosition == 0) || (fixedPosition == 2))) {
            return styles.carouselItemHidden;
        }
    }, [customItemEmphasisStyle, getFixedPosition])

    return (
        <div className={styles.carouselContainer}>
            <>
                <ShowcaseWindow
                    items={items}
                    height={divHeight}
                    spacingLeftValue={spacingLeftValue}
                    carouselItemStyle={carouselItemStyle}
                    refMeasuresInstance={refMeasuresInstance as RefObject<HTMLDivElement>}
                    itemStyle={styles.carouselItem}
                    imgBasePath={imgBasePath}
                />
                <Arrows arrowLeftStyle={styles.arrowLeft} arrowRightStyle={styles.arrowRight} handleNext={handleNext} handlePrevious={handlePrevious} />
                <BulletsWindow length={items.length} position={position} bottomPosition={bottomPosition} />
            </>
        </div>
    )
}