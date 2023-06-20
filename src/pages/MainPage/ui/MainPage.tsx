import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation()
    return (
        <div>
            <div>{t('Главная')}</div>
        </div>
    );
};
export default  MainPage;
