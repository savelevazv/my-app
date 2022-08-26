import React from "react";

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
            <h2 style={{ margin: '48px 0 30px 0' }} className="font-style36">Акции</h2>
            <div className="promotions--cards--container">
                {cardsInfo.map((item) => {
                    return (
                        <div className="promotial--card">
                            <p className="font-style20">{item.date}</p>
                            <h3 className="primotal--card--title font-style36">{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}