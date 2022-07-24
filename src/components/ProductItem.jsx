import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <li className="product">
            <ul className="product_bonus-list">
                <li><span className="product_bonus-item hit">хит</span></li>
                <li><span className="product_bonus-item discount">скидка</span></li>
                <li><span className="product_bonus-item action">акция</span></li>
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
                    <li><button className="item plus">+</button></li>
                    <li><input type='text' className="item number" value='3'/></li>
                    <li><button className="item minus">-</button></li>
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