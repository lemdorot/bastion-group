import React from 'react';
import { useActions } from '../hooks/useActions';
import { ICart } from '../types/cart';
import { IProduct } from '../types/product';

const CartItem = ({ cart }: { cart: ICart }) => {
    const { updateCart, removeCart } = useActions()

    const updateCountCart = (cart: ICart, count: number) => {        
        const newCart: ICart = {
            product: cart.product,
            count: count,
            sum: parseFloat(cart.product.price.toString().replace(/,/, '.')) * count
        }
        updateCart(newCart)
    }

    const countHandler = (e: any) => {
        if (e.target.value <= 0) {
            updateCountCart(cart, 1)
        } else {
            updateCountCart(cart, e.target.value)
        }
    }

    const plusCount = () => {
        updateCountCart(cart, +cart.count + 1)
    }

    const minusCount = () => {
        if (cart.count <= 1) {
            updateCountCart(cart, 1)
        } else {
            updateCountCart(cart, +cart.count - 1)
        }
        
    }

    return (
        <li className="cart_product-item">
            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
            <div className="cart_product-info">
                <p className="cart_product-gost">{cart.product.gost}</p>
                <h3 className="cart_product-description">{cart.product.name}</h3>
                <p className="cart_product-price">{cart.product.price}</p>
            </div>
            <ul className="cart_product-counter product_counter">
                <li><button onClick={plusCount} className="cart_product-counter-btn product_counter-btn">+</button></li>
                <li><input type='text' onChange={countHandler} value={cart.count} className="cart_product-counter-number product_counter-number"/></li>
                <li><button onClick={minusCount}  className="cart_product-counter-btn product_counter-btn">-</button></li>
            </ul>
            <p className="cart_product-price-sum">{cart.sum} руб.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); removeCart(cart) }}>
                <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
            </a>
        </li>
    );
};

export default CartItem;