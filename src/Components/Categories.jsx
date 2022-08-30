import React from "react";

export const CategoriesElement = ({ to, title }) => {
    return (
        <div className="categories--element">
            <a href={to}>{title}</a>
        </div>
    )
}

const elements = [
    {
        to: '/',
        title: 'Обувь'
    },
    {
        to: '/',
        title: 'Ремни'
    },
    {
        to: '/',
        title: 'Очки'
    },
    {
        to: '/',
        title: 'Сумки'
    },
    {
        to: '/',
        title: 'Аксессуары'
    },
    {
        to: '/',
        title: 'Бренды'
    },
    {
        to: '/',
        title: 'Новинки'
    },
    {
        to: '/',
        title: 'Домашние товары'
    },
    {
        to: '/',
        title: 'Товары для красоты'
    },
]

export const Categories = () => {
    return (
        <div className="categories--container">
            <h3 className="categories--title font--base style36">Категории</h3>
            <p className="categories--comment font--base style20">*Выберите категорию, чтобы перейти в раздел магазина</p>
            <div className="categories--list--container font--base style20">
                {elements.map((el) => {
                    return (
                        <CategoriesElement
                            to={el.to}
                            title={el.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}