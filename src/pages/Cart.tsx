import React from 'react';
import CartList from '../components/CartList';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Cart = () => {
    const { carts } = useTypedSelector(state => state.cart)

    const getSumPrices = (carts: any[]) => {
        let result = carts.reduce(function(sum, current) {
            return sum + current.sum;
          }, 0);

        return result.toFixed(2)
    }

    return (
        <div className='cart'>
            <h1 className="cart_title">Корзина</h1>

            <div className="cart_container">

                <section className="cart_wrapper">
                    
                    <div className="cart_message">
                        <img src="./img/alert-triangle_1.svg" className="cart_message-img" alt="значок тревоги" width="16"/>
                        <p className="cart_message-text">Извините, но указанное ранее количество товара недоступно. Установлено ближайшее доступное значение.</p>
                    </div>

                    <CartList />

                </section>

                <section className="cart_order-wrapper">
                    <h2 className="cart_order-title">Заказ</h2>
                    <p className="cart_order-info">Контактная информация</p>
                    <form action="#" method="post" encType="multipart/form-data" className="cart_order-form">
                        <ul className="cart_order-info-wrapper">
                            <li className="cart_order-info-item">
                                <label htmlFor="username">ФИО</label>
                                <div>
                                    <img src="./img/user_1.svg" alt="значок юзера" width="14"/>
                                    <input type="text" name="username" placeholder="Иванов Иван Иванович" className="form-input current"/>
                                </div>
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/phone_2.svg" alt="значок телефонв" width="14"/>
                                <input type="tel" name="phonenumber" placeholder="Контактный телефон" className="form-input"/>
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/at-sign_1.svg" alt="значок имейла" width="14"/>
                                <input type="tel" name="email" placeholder="Email" className="form-input"/>
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/briefcase_1.svg" alt="значок чемодана" width="14"/>
                                <input type="tel" name="org" placeholder="Организация / ИНН" className="form-input"/>
                            </li>
                        </ul>
                        
                        <div className="cart_order-total">
                            <p className="cart_order-total-text">Итого</p>
                            <p className="cart_order-total-sum">{getSumPrices(carts)} руб.</p>
                        </div>

                        <button type="submit" className="cart_order-btn">
                            <img src="./img/shopping.svg" alt="значок корзины" width="18"/>
                            Оформить заказ
                        </button>

                        <div className="cart_order-commercial">
                            <a href="#">
                                <img src="./img/main/file-text_2.svg" alt="иконка для закачки" width="24"/>
                            </a>
                            <h3>Коммерческое <br/> предложение</h3>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Cart;