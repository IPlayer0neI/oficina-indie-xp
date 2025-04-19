import { useEffect, useState } from "react";

export function useCarousel(length: number, w: number) {
    const [position, setPosition] = useState(0);
    const [width, setWidth] = useState(w);

    useEffect(function(){
        setWidth(w)
    }, [w])

    function handlePrevious() {
        const newPosition = position - 1;
        setPosition(newPosition < 0 ? length - 1 : newPosition)
    }

    function handleNext() {
        const newPosition = position + 1;
        setPosition(newPosition >= length ? 0 : newPosition)
    }

    function getFixedPosition(index: number){
        if (index >= (length - position - 1)) {
            return ((index - (length)) + position);
        }

        return (index + position);
    }

    function spacingLeftValue(index: number) {
        return (width * ((getFixedPosition(index))));
    }

    return {
        position,
        getFixedPosition,
        carouselWidth: width,
        handlePrevious,
        handleNext,
        spacingLeftValue,
        setPosition
    }
}