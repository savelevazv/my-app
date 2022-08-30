import React from "react";

export const PromotionalCard = ({ date, title }) => {
    return (
        <div className="promotional--card">
            <p className="font--base style20">{date}</p>
            <h3 className="promotional--card--title font--base style36">{title}</h3>
        </div>
    )
}

const cardsInfo = [
    {
        date: 'до 12.11.2022',
        title: <p>Кэшбэк<br />до 33%</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>до<strong> -25%</strong><br />на товары <br />для дома</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новая коллекция Timberland</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новые привелегии клуба</p>
    }

]

export const Promotions = () => {
    return (
        <div className="promotions--container">
            <h2 style={{ margin: '48px 0 30px 0' }} className="font--base style36">Акции</h2>
            <div className="promotions--cards--container">
                {cardsInfo.map((item) => {
                    return (
                        <PromotionalCard
                            date={item.date}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}