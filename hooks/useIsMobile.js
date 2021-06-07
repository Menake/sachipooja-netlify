import { useState, useEffect } from "react";

export default function useIsMobile() {
    const [width, setWidth] = useState();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= 768;
}