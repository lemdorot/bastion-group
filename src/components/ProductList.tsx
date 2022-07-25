import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ProductItem from './ProductItem';


const PostList = () => {
    const { products } = useTypedSelector(state => state.product)

    if (!products.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                Список пуст!
            </h1>
        )
    }

    return (
        <ul className="products_list">
            {products.map((product) => 
                <ProductItem key={product.id} product={product} />  
            )}
        </ul>
    );
};

export default PostList;