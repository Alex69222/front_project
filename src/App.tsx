import React, {Suspense, useContext, useState} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

 const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route element={<MainPageAsync/>} path={'/'}/>
                    <Route element={<AboutPageAsync/>} path={'/about'}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
