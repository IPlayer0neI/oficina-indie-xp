import { useState, useEffect } from "react";

export function useTime() {
    const date = new Date();
    const [hours, setHours] = useState(String(date.getHours()).padStart(2, '0'));
    const [minutes, setMinutes] = useState(String(date.getMinutes()).padStart(2, '0'));

    useEffect(function () {
        const id = setInterval(function () {
            const date = new Date();
            setHours(String(date.getHours()).padStart(2, '0'));
            setMinutes(String(date.getMinutes()).padStart(2, '0'));
        }, 1000)

        return function () {
            clearInterval(id);
        }
    })

    return {
        time: `${hours}:${minutes}`
    }
}