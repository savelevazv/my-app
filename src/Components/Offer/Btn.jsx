import React from "react";

export const Btn = ({ children, onClick, isOptional}) => {
    return (
        <button className={isOptional ? "btn--optional font-style16" : "btn font-style16"} onClick={onClick}>
            {children}
        </button>
    )
}