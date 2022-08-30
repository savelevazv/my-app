import React from "react";

export const NewProductsInfoProps = ({ title, mainDescription, description, isMain, additional}) => {
    return (
        <div className={isMain ? 'first--style card--container' : additional ? 'second--style card--container' : 'third--style card--container'}>
            <h3 className="font--base style36">{title}</h3>
            <p className="font--base style36">{mainDescription}</p>
            <p className={description ? 'margin--top--description font--base style20' : 'margin--zero'}>{description}</p>
        </div>
    )
}

export const NewProducts = ({ mainPlacement, secondaryPlacement, secondarySecondPlacement }) => {
    return (
        <div className="new--products--container">
            <h2 className="title--new--products font--base style36">Новинки</h2>
            <div className="grid--cards--container">
            <NewProductsInfoProps {...mainPlacement} isMain={true}/>
            <NewProductsInfoProps {...secondaryPlacement} additional={true} />
            <NewProductsInfoProps {...secondarySecondPlacement} />
        </div>
        </div>
    )
}