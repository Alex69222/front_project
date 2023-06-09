import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (

        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route key={path} element={
                    <Suspense fallback={<div>...loading</div>}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                } path={path}/>
            ))}
        </Routes>
    );
};

export default AppRouter;
