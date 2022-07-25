import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CartItem from './CartItem';

const CartList = () => {
    const { carts } = useTypedSelector(state => state.cart)
    const { clearCart } = useActions()

    if (!carts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                Список пуст!
            </h1>
        )
    }

    return (
        <div>
            <ul className="cart_product-list">
                {carts.map((cart) => 
                    <CartItem key={cart.id} cart={cart} />  
                )}
            </ul>
            {carts.length ? <div className="cart_clear">
                <a href='#' onClick={(e) => {e.preventDefault(); clearCart()}} className="cart_clear-link">
                    <img src="./img/trash_1.svg" className="cart_clear-img" alt="значок корзины" width="18"/>
                    Очистить корзину    
                </a>
            </div> : ''}
        </div>
    );
};

export default CartList;