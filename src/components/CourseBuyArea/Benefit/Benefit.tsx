import { ReactNode } from "react";
import styles from "./index.module.css"

interface Benefitprops {
    imgName: string;
    title: string;
    children: ReactNode;
}

export function Benefit({ imgName, title, children }: Benefitprops) {
    return (
        <div className={styles.benefit}>
            <div className={styles.imgContainer}>
                <img src={`assets/various/${imgName}`} />
            </div>
            <h1 className="textShine">
                {title}
            </h1>
            <p>
                {children}
            </p>
        </div>
    )
}