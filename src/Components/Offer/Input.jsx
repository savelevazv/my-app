import React from "react";
import { useState } from "react";

export const Input = ({ type, placeholder, id, onChange, isMain }) => {
    const [value, setValue] = useState('')

    return (
        <input className={isMain ? 'input--style font-style16' : 'checkbox--input'}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={event => setValue(event.target.value)}
        />
    )
}