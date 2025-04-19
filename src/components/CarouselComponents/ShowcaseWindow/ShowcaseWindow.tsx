import { RefObject } from "react";
import styles from "./index.module.css"
import { Window } from "@/components/Windows7Components/Window/Window";
import { CommandPrompt } from "@/components/Windows7Components/Commandprompt/CommandPrompt";

interface ShowcaseProps {
    items: string[] | Array<Array<string>>;
    height: number;
    refMeasuresInstance: RefObject<HTMLDivElement>;
    carouselItemStyle: (index: number) => (string | void);
    spacingLeftValue: (index: number) => (number | void);
    itemStyle: string;
    imgBasePath: string;
}

export function ShowcaseWindow({ items, height, refMeasuresInstance, itemStyle, carouselItemStyle, spacingLeftValue, imgBasePath }: ShowcaseProps) {
    return (
        <div className={styles.carouselContainer}>
            <div style={{ height: height }} className={styles.carousel}>
                {
                    items.map(function (value, index) {
                        const isArray = Object.prototype.toString.call(value) === '[object Array]';
                        const imgName = isArray ? value[0] : value as string;

                        return (
                            <div
                                ref={index == 0 ? refMeasuresInstance : undefined}
                                key={imgName.concat(String(index))}
                                style={{
                                    left: spacingLeftValue(index) || 0
                                }}
                                className={`${styles.item} ${itemStyle} ${carouselItemStyle(index)}`}
                            >
                                <Window>
                                    <>
                                        <img className={styles.itemImg} src={`assets/${imgBasePath}/${imgName}`} />
                                    </>
                                </Window>
                                {
                                    isArray && (
                                        <CommandPrompt>
                                            <h3 className={`textShine ${styles.itemTitle}`}>{value[1]}</h3>
                                        </CommandPrompt>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}