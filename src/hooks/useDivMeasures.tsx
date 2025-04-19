import { useEffect, useRef, useState } from "react";

export function useDivMeasures(defaultWidth?: number) {
    const refMeasuresInstance = useRef<HTMLDivElement|({ clientWidth: number, clientHeight: number })>({ clientWidth: defaultWidth || 0, clientHeight: 0 });
    const [divWidth, setDivWidth] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(function () {
        setDivWidth(refMeasuresInstance.current.clientWidth)
        setDivHeight(refMeasuresInstance.current.clientHeight)
    }, [refMeasuresInstance.current]);

    useEffect(function () {
        function handleResize() {
            setDivWidth(refMeasuresInstance.current.clientWidth)
            setDivHeight(refMeasuresInstance.current.clientHeight)
        }

        window.addEventListener("resize", handleResize)

        return function () {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return {
        refMeasuresInstance,
        divWidth,
        divHeight
    }
}