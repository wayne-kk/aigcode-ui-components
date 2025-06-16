import React, { CSSProperties } from "react";
interface OverflowProps<T> {
    data: T[];
    style?: CSSProperties;
    className?: string;
    renderItem: (item: T, index: number) => React.ReactNode;
    maxCount: number;
    minCount?: number;
    renderRest?: (restItems: T[]) => React.ReactNode;
    onUpdate?: (visibleItems: T[], restItems: T[]) => void;
}
declare const Overflow: <T>({ data, style, className, renderItem, maxCount, minCount, renderRest, onUpdate, }: OverflowProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Overflow;
//# sourceMappingURL=Overflow.d.ts.map