import React from "react";

export const Btn = ({ children, onClick, isOptional}) => {
    return (
        <button className={isOptional ? "btn--optional font--base style16" : "btn font--base style16"} onClick={onClick}>
            {children}
        </button>
    )
}