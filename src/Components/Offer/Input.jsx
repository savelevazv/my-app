import React from "react";
import { useState } from "react";

export const Input = ({ type, placeholder, id, onChange }) => {
    const [value, setValue] = useState('')

    return (
        <input className="input--style font--base style16"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={event => setValue(event.target.value)}
        />
    )
}