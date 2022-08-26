import React from "react";
import { Link } from "./Link";

export const FooterProps = ({ title }) => {
    return(
        <div className="footer--list">
            <p style={{ paddingBottom:'16px' }} className="font-style20"><strong>{title}</strong></p>
            <div className=" font-style16">
                <Link
                    to={'/'}
                    title={'Статус заказа по номеру'}
                />
                <Link
                    to={'/'}
                    title={'Центр поддержки'}
                />
                <Link
                    to={'/'}
                    title={'Как оформить заказ'}
                />
                <Link
                    to={'/'}
                    title={'Как выбрать размер'}
                />
                <Link
                    to={'/'}
                    title={'Условия доставки'}
                />
                <Link
                    to={'/'}
                    title={'Мои заказы'}
                />
                <Link
                    to={'/'}
                    title={'Возврат'}
                />
                <Link
                    to={'/'}
                    title={'Публичная оферта'}
                />
                <Link
                    to={'/'}
                    title={'Программа лояльности'}
                />
                <Link
                    to={'/'}
                    title={'Частозадаваемные вопросы'}
                />
                <Link
                    to={'/'}
                    title={'Исследования'}
                />
            </div>
        </div>
        )
}

export const Footer = ({ firstBlock, secondBlock, thirdBlock }) => {
    return (
        <div style={{ margin: '68px 0 38px 0' }}>
            <div className="footer--list--container">
                <FooterProps {...firstBlock}/>
                <FooterProps {...secondBlock}/>
                <FooterProps {...thirdBlock}/>
            </div>
        </div>
    )
}