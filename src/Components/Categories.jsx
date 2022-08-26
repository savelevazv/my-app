import React from "react";

export const CategoriesElement = ({ to, title }) => {
    return (
        <div className="categories--element">
            <a href={to}>{title}</a>
        </div>
    )
}

export const Categories = () => {
    return (
        <div className="categories--container">
            <h3 className="categories--title font-style36">Категории</h3>
            <p className="categories--comment font-style20">*Выберите категорию, чтобы перейти в раздел магазина</p>
            <div className="categories--list--container font-style20">
                <CategoriesElement
                    to={'/'}
                    title={'Обувь'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Ремни'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Очки'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Сумки'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Аксессуары'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Бренды'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Новинки'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Домашние товары'}
                />
                <CategoriesElement
                    to={'/'}
                    title={'Товары для красоты'}
                />
            </div>
        </div>
    )
}