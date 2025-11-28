import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = ({children, settings, width} : any) => {
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <div className={`w-${width} overflow-hidden`}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default ClientSlider;