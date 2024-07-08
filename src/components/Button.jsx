import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-sky-800",
    textColor = "text-stone-200",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
