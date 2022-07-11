import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route
                exact path='/'
                element={<Home />}>
            </Route>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog />}>
            </Route>
            <Route
                path='/:category/:id'
                element={<Detail />}>
            </Route>
            <Route
                path='/:category'
                element={<Catalog />}>
            </Route>
        </Routes>
    );
}

export default RoutesConfig;