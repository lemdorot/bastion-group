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
            <Route path="/" element={<Main />} />
            <Route path="/productForm" element={<ProductForm />} />
            <Route path="/productTypeForm" element={<ProductTypeForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/error" element={<Error />} />
            <Route path='*' element={<Navigate replace to="/error" />}/>
        </Routes>
    );
};

export default AppRouter;