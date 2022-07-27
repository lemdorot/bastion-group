import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Main from '../pages/Main';
import ProductForm from '../pages/ProductForm';
import ProductTypeForm from '../pages/ProductTypeForm';
import Error from '../pages/Error';
import Cart from '../pages/Cart';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
            <Route path={process.env.PUBLIC_URL + "/productForm"} element={<ProductForm />} />
            <Route path={process.env.PUBLIC_URL + "/productTypeForm"} element={<ProductTypeForm />} />
            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route path={process.env.PUBLIC_URL + "/error"} element={<Error />} />
            <Route path={process.env.PUBLIC_URL + '*'} element={<Navigate replace to="/error" />}/>
        </Routes>
    );
};

export default AppRouter;