import React from "react";

export const InfoElement = ({ title, body }) => {
    return (
        <div className="info--element font--base style20">
            <p className="info--element--title">{title}</p>
            <p>{body}</p>
        </div>
    )
}

const informationElements = [
    {
        title: 'Доставка на следующий день',
        body: <>В Москве и 60 других крупных городах России вы получите свой заказ уже на следующий день! Более подробную информацию об условиях доставки в ваш город можно найти здесь.</>
    },
    {
        title: 'Примерка перед покупкой',
        body: <>Интернет-магазин даёт<br />возможность примерить<br />одежду, обувь и другие товары<br />перед оплатой заказа курьеру.<br />Оплачивайте только то, что <br />вам подошло и понравилось!</>
    },
    {
        title: 'Удобные способы оплаты',
        body: <>Вы можете оплатить покупки<br />не только наличными, но и<br />банковской картой. У всех<br />курьеров при себе есть<br />терминал для оплаты картами.</>
    }
]

export const Info = () => {
    return (
        <div className="info--container">
            {informationElements.map((el) => {
                return (
                    <InfoElement
                        title={el.title}
                        body={el.body}
                    />
                )
            })}
        </div>
    )
}