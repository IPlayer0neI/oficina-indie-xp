interface BulletsProps {
    length: number;
    position: number;
}

export function BulletsStatusBar({ length, position }: BulletsProps) {
    const positivePositionValue = position > length ?
        (length * 2) - position :
        position;
        
    return (
        <div className="status-bar">
            <p className="status-bar-field">Press F1 for help</p>
            <p className="status-bar-field">Slide {positivePositionValue}</p>
            <p className="status-bar-field">Carousel Usage: {Math.round((positivePositionValue / length) * 100)}%</p>
        </div>
    )
}