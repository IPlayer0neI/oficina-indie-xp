import styles from "./index.module.css"

interface BulletsProps {
    length: number;
    bulletItemStyle: (index: number) => string,
    setPosition: (newPosition: number) => void,
    bottomPosition?: string
}

export function Bullets({ length, bottomPosition, bulletItemStyle, setPosition }: BulletsProps) {
    return (
        <div className={styles.bullets} style={{
            bottom: bottomPosition
        }}>
            {
                new Array(length).fill(true).map(function (_, index) {
                    return (
                        <div key={index} onClick={() => setPosition(index)} className={bulletItemStyle(index)}></div>
                    )
                })
            }
        </div>
    )
}