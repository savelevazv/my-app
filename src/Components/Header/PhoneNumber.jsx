import React from "react";

export const PhoneNumber = ({ number }) => {
    const numberToStr = `tel: ${number}`
    return (
        <a href={numberToStr}>{number}</a>
    )
}