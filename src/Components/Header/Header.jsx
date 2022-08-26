import React from "react";
import { Link } from "../Link";
import { PhoneNumber } from "./PhoneNumber";

export const Header = () => {
    return (
        <div className="header--container">
            <div className="logo--container font-style36">
                <Link
                    to={'/'}
                    title={'Logo'}
                    basicStyle={true}
                />
            </div>
            <div className="links--container font-style24">
                <Link
                    to={'/'}
                    title={'Товары'}
                    basicStyle={true}
                />
                <Link
                    to={'/'}
                    title={'Услуги'}
                    basicStyle={true}
                />
                <Link
                    to={'/'}
                    title={'Контакты'}
                    basicStyle={true}
                />
                <Link
                    to={'/'}
                    title={'Магазины'}
                    basicStyle={true}
                />
                <Link
                    to={'/'}
                    title={'Новости'}
                    basicStyle={true}
                />
            </div>
            <div className="phone--number--container font-style24">
                <PhoneNumber
                    number={'+7-999-111-22-33'}
                />
            </div>
        </div>
    )
}