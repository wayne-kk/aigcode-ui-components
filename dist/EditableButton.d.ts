import React from "react";
interface EditableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    propKey?: string;
    href?: string;
}
export default function EditableButton({ children, className, style, propKey, href, ...rest }: EditableButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EditableButton.d.ts.map