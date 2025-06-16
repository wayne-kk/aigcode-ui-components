import React, { ReactNode } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface CarouselProps {
    autoplay?: boolean;
    cellAlign?: "left" | "center" | "right";
    wrapAround?: boolean;
    withoutControls?: boolean;
    cellSpacing?: number;
    slidesToShow?: number;
    speed?: number;
    children: ReactNode;
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map