import React from "react";

export const Link = ({ to, title, basicStyle }) => {
    return (
        <div className={basicStyle ? "link--container" : "footer--link--container"}>
            <a href={to}>{title}</a>
        </div>
    )
}