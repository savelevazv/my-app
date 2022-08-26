import React from "react";
import { Btn } from "./Btn";
import { Input } from "./Input";

export const Subscription = () => {
    return (
        <div className="subscriprion--container">
            <p style={{ textAlign: 'center', display: 'block' }} className="font-style24">Получите дополнительную скидку<br />
                <strong>10% на любой заказ</strong>
            </p>
            <Input
                type={'text'}
                placeholder='Укажите e-mail для рассылки'
                id={'email'}
                isMain={true}
            />
            <div className="checkbox--container">
                <Input
                    type={'checkbox'}
                    id={'check'}
                />
                <label for='check' className="font-style16">Создать учетную запись</label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для неё
                </Btn>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для него
                </Btn>
            </div>
        </div>
    )
}