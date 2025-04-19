import { useWaitToPassHandler } from "@/hooks/useWaitToPassHandler";
import { Window } from "@/components/Windows7Components/Window/Window";

interface ArrowsProps {
    handlePrevious: () => void;
    handleNext: () => void;
    arrowLeftStyle: string;
    arrowRightStyle: string;
}

export function Arrows({ handlePrevious, handleNext, arrowLeftStyle, arrowRightStyle }: ArrowsProps) {
    const { waitHandler } = useWaitToPassHandler(450);

    return (
        <>
            <Window style={{ zIndex: "2000", cursor: "pointer" }} className={arrowLeftStyle}>
                <div onClick={waitHandler(handleNext)}>
                    <button onClick={waitHandler(handleNext)}>
                        &lt;&lt;&lt; Previous Slide
                    </button>
                </div>
            </Window>
            <Window style={{ zIndex: "2000", cursor: "pointer" }} className={arrowRightStyle}>
                <div onClick={waitHandler(handlePrevious)}>
                    <button onClick={waitHandler(handlePrevious)}>
                        Next Slide &gt;&gt;&gt;
                    </button>
                </div>
            </Window>
        </>
    )
}