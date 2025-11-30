import React, { useEffect, useState, type ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ClientSliderType = {
    children: ReactNode,
    settings: object,
    width: string,
    height: string
}

const ClientSlider = ({children, settings, width, height} : ClientSliderType) => {
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <div className={`${width} ${height} overflow-hidden`}>
            <Slider className="h-screen" {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default ClientSlider;