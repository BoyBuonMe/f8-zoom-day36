import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        window.scrollTo(0, 0); // Code để xác định vị trí đầu trang (0, 0) khi chuyển trang.
    }, [location.pathname])
    
    return null;
}