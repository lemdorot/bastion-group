import React from 'react';
import { ICart } from '../types/cart';

const CartItem = ({ cart }: { cart: ICart }) => {
    return (
        <li className="cart_product-item">
            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
            <div className="cart_product-info">
                <p className="cart_product-gost">{cart.product.gost}</p>
                <h3 className="cart_product-description">{cart.product.name}</h3>
                <p className="cart_product-price">{cart.product.price}</p>
            </div>
            <ul className="cart_product-counter product_counter">
                <li><button className="cart_product-counter-btn product_counter-btn">+</button></li>
                <li><input type='text' value={cart.count} className="cart_product-counter-number product_counter-number"/></li>
                <li><button  className="cart_product-counter-btn product_counter-btn">-</button></li>
            </ul>
            <p className="cart_product-price-sum">{cart.sum} руб.</p>
            <a href="#">
                <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
            </a>
        </li>
    );
};

export default CartItem;