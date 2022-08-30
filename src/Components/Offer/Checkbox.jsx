import React, { useState } from "react";

export const Label = ({ id, title }) => {
    return (
        <label for={id} className="checkbox--label font--base style16">{title}</label>
    )
}

export const Checkbox = ({ type, id }) => {
    return (
        <>
            <input className="checkbox--input"
                type={type}
                id={id}
            />
            <Label
                id={'check'}
                title={'Создать учетную запись'}
            />
        </>
    )
}