import React from "react";
import { Btn } from "../Offer/Btn";

export const ProductItem = ({ title, price, isOptional }) => {
    return (
        <div className="product--item">
            <div className="img">
            </div>
            <p style={{ padding: '16px 0' }} className="font--base style22">{title}</p>
            <p style={{ paddingBottom: '81px' }} className="font--base style20"><strong>{price}</strong></p>
            <Btn isOptional={isOptional}>
                Купить
            </Btn>
        </div>
    )
}

const products = [
    {
        title: 'Сапоги',
        price: '9990 P',
        isOptional: true
    },
    {
        title: 'Сапоги',
        price: '9990 P',
        isOptional: true
    },
    {
        title: 'Сапоги',
        price: '9990 P',
        isOptional: true
    },
    {
        title: 'Сапоги',
        price: '9990 P',
        isOptional: true
    }
]

export const Popular = () => {
    return (
        <div className="container--popular">
            <h2 style={{ margin: '40px 0 30px 0' }} className="font--base style36">Популярное</h2>
            <div className="products--container">
                {products.map((product) => {
                    return (
                        <ProductItem
                            title={product.title}
                            price={product.price}
                            isOptional={product.isOptional}
                        />
                    )
                })}
            </div>
        </div>
    )
}