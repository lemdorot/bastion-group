import React, { useState } from 'react';

const ProductItem = ({ product }) => {
    const [ hit, setHit ] = useState(false)
    const [ action, setAction ] = useState(false)

    const getHit = (product) => {
        return product.name.toLowerCase().indexOf('о') == -1 ? false : true
    }

    const getAction = (product) => {
        return product.name.toLowerCase().indexOf('а') == -1 ? false : true
    }

    return (
        <li className="product">
            <ul className="product_bonus-list">
                {getHit(product) ? <li><span className="product_bonus-item hit">хит</span></li> : ''}
                <li style={{display: 'none'}}><span className="product_bonus-item discount">скидка</span></li>
                {getAction(product) ? <li><span className="product_bonus-item action">акция</span></li> : ''}
            </ul>
            <a href="#" className="product_favorite-link">
                <img src="./img/products/star.svg" alt="звездочка" width="13"/>
                В избранное
            </a>
        
            <img src="./img/products/product.png" className='product_img' alt="миниатюра продукта" width="179"/>
            <p className="product_gost">{product.gost}</p>
            <h3 className="product_description">{product.name}</h3>
            <div className="product_price-wrapper">
                <p className="product_price">{product.price} руб.</p>
                <ul className="product_counter">
                    <li><button className="product_counter-btn">+</button></li>
                    <li><input type='text' className="product_counter-number" value='3'/></li>
                    <li><button className="product_counter-btn">-</button></li>
                </ul>
            </div>
            <div className="product_btn-wrapper">
                <button type="button" className="product_busket-btn">
                    <img src="./img/main/shopping-cart.svg" alt="значок корзины" width="18"/>
                    В корзину
                </button>
                <button type="button" className="product_busket-btn more">
                    Подробнее
                </button>
            </div>
        </li>
    );
};

export default ProductItem;