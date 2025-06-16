import React from "react";
interface MarqueeProps {
    children: React.ReactNode;
    speed?: number;
    direction?: "left" | "right";
    className?: string;
    autoFill?: boolean;
    play?: boolean;
}
declare const Marquee: React.FC<MarqueeProps>;
export default Marquee;
//# sourceMappingURL=Marquee.d.ts.map