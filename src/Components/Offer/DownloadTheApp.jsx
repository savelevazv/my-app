import React from "react";
import { Btn } from "./Btn";

export const DownloadTheApp = () => {
    return (
        <div className="download--app--container">
            <h3 style={{ textAlign: 'right' }} className="font-style36">Установите наше<br />мобильное приложение</h3>
            <div className="btn--container" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '40px', marginTop: '40px' }}>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    AppStore
                </Btn>
                <div style={{ paddingTop: '17px' }}></div>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Google Play
                </Btn>
            </div>
        </div>
    )
}