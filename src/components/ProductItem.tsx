import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICart } from '../types/cart';
import { IProduct } from '../types/product';

const ProductItem = ({ product }: { product: IProduct }) => {
    const {addProductToCart, updateCart} = useActions()
    const { carts, success, error } = useTypedSelector(state => state.cart)
    const [ count, setCount ] = useState(3)
    const [ hit, setHit ] = useState(false)
    const [ action, setAction ] = useState(false)

    const getHit = (product: IProduct) => {
        return product.name.toLowerCase().indexOf('о') == -1 ? false : true
    }

    const getAction = (product: IProduct) => {
        return product.name.toLowerCase().indexOf('а') == -1 ? false : true
    }

    const addToCart = (product: IProduct, count: number) => {
        const index = carts.findIndex(cart => cart.product.id == product.id)
        
        if (index == -1) {
            const cart: ICart = {
                product,
                count,
                sum: parseFloat((parseFloat(product.price.toString().replace(/,/, '.')) * count).toFixed(2))
            }
            addProductToCart(cart)
        } else {
            let productCount = carts[index].count + count 
            const cart: ICart = {
                product,
                count: productCount,
                sum: parseFloat((parseFloat(product.price.toString().replace(/,/, '.')) * productCount).toFixed(2))
            }
            updateCart(cart)
        }
    }

    const countHandler = (e: any) => {
        if (e.target.value <= 1) {
            setCount(1)
        } else {
            setCount(e.target.value)
        }
    }

    const plusCount = () => {
        setCount(+count + 1)
    }

    const minusCount = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
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
                    <li><button onClick={plusCount} className="product_counter-btn">+</button></li>
                    <li><input type='text' onChange={countHandler} className="product_counter-number" value={count}/></li>
                    <li><button onClick={minusCount} className="product_counter-btn">-</button></li>
                </ul>
            </div>
            <div className="product_btn-wrapper">
                <button type="button" onClick={() => addToCart(product, count)} className="product_busket-btn">
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