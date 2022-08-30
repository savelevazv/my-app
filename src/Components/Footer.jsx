import React from "react";
import { Link } from "./Link";

const footerElements = [
    {
        to: '/',
        title: 'Статус заказа по номеру'
    },
    {
        to: '/',
        title: 'Центр поддержки'
    },
    {
        to: '/',
        title: 'Как оформить заказ'
    },
    {
        to: '/',
        title: 'Как выбрать размер'
    },
    {
        to: '/',
        title: 'Условия доставки'
    },
    {
        to: '/',
        title: 'Мои заказы'
    },
    {
        to: '/',
        title: 'Возврат'
    },
    {
        to: '/',
        title: 'Публичная оферта'
    },
    {
        to: '/',
        title: 'Программа лояльности'
    },
    {
        to: '/',
        title: 'Частозадаваемные вопросы'
    },
    {
        to: '/',
        title: 'Исследования'
    }
]

export const FooterProps = ({ title }) => {
    return (
        <div className="footer--list">
            <p style={{ paddingBottom: '16px' }} className="font--base style20">
                <strong>{title}</strong>
            </p>
            <div className="font--base style16">
                {footerElements.map((el) => {
                    return (
                        <Link
                            to={el.to}
                            title={el.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export const Footer = ({ firstBlock, secondBlock, thirdBlock }) => {
    return (
        <div style={{ margin: '68px 0 38px 0' }}>
            <div className="footer--list--container">
                <FooterProps {...firstBlock} />
                <FooterProps {...secondBlock} />
                <FooterProps {...thirdBlock} />
            </div>
        </div>
    )
}