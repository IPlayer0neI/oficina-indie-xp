import { useWaitToPassHandler } from "@/hooks/useWaitToPassHandler";
import styles from "./index.module.css"

interface ArrowButtonProps {
    handlePrevious: () => void;
    handleNext: () => void;
}

export function ArrowButton({ handlePrevious, handleNext }: ArrowButtonProps) {
    const { waitHandler } = useWaitToPassHandler(450);

    return (
        <div className={styles.buttonContainer}>
            <button onClick={waitHandler(handleNext)}>
                &lt;&lt;&lt; Previous Slide
            </button>
            <button onClick={waitHandler(handlePrevious)}>
                 Next Slide &gt;&gt;&gt;
            </button>
        </div>
    )
}