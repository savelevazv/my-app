import React from "react";
import { Btn } from "../Offer/Btn";

const products = [
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    }
]

export const Popular = () => {
    return (
        <div className="container--popular">
            <h2 style={{ margin: '40px 0 30px 0' }} className="font-style36">Популярное</h2>
            <div className="products--container">
                {products.map((product) => {
                    return (
                        <div className="product--item">
                            <div className="img">
                            </div>
                            <p style={{ padding: '16px 0' }} className="font-style22">{product.title}</p>
                            <p style={{ paddingBottom: '81px' }} className="font-style20"><strong>{product.price}</strong></p>
                            <Btn isOptional={true}>
                                Купить
                            </Btn>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}