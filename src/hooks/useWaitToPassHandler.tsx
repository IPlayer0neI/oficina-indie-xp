import { useEffect, useRef, useState } from "react";

export function useWaitToPassHandler(time: number) {
    const [waiting, setWaiting] = useState(false);
    const refTimeout = useRef<NodeJS.Timeout>(null);

    function waitHandler(handler: () => void) {
        return function () {
            if (!waiting) {
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
            if (refTimeout.current) {
                clearTimeout(refTimeout.current);
            }
        }
    }, [])

    return {
        waitHandler
    }
}