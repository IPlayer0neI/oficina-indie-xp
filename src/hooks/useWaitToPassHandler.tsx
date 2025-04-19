import { useEffect, useRef, useState } from "react";

export function useWaitToPassHandler(time: number) {
    const [waiting, setWaiting] = useState(false);
    const refTimeout = useRef(null);

    function waitHandler(handler: () => void) {
        return function () {
            if (!waiting) {
                //@ts-ignore
                refTimeout.current = setTimeout(function () {
                    setWaiting(false);
                }, time);
                setWaiting(true);
                handler();
            }
        }
    }

    useEffect(function () {
        return function () {
            refTimeout.current && clearTimeout(refTimeout.current);
        }
    }, [])

    return {
        waitHandler
    }
}