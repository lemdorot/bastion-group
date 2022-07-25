import React from 'react';

const Cart = () => {
    return (
        <div className='cart'>
            <h1 className="cart_title">Корзина</h1>

            <div className="cart_container">

                <section className="cart_wrapper">
                    
                    <div className="cart_message">
                        <img src="./img/alert-triangle_1.svg" className="cart_message-img" alt="значок тревоги" width="16"/>
                        <p className="cart_message-text">Извините, но указанное ранее количество товара недоступно. Установлено ближайшее доступное значение.</p>
                    </div>

                    <ul className="cart_product-list">
                        <li className="cart_product-item">
                            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
                            <div className="cart_product-info">
                                <p className="cart_product-gost">ГОСТ 14911-82</p>
                                <h3 className="cart_product-description">Опора подвижная ОПБ2</h3>
                                <p className="cart_product-price">849.9 руб.</p>
                            </div>
                            <ul className="cart_product-counter product_counter">
                                <li><button className="cart_product-counter-btn product_counter-btn">+</button></li>
                                <li><input type='text' value='3' className="cart_product-counter-number product_counter-number"/></li>
                                <li><button  className="cart_product-counter-btn product_counter-btn">-</button></li>
                            </ul>
                            <p className="cart_product-price-sum">2 549.7 руб.</p>
                            <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
                        </li>
                        <li className="cart_product-item">
                            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
                            <div className="cart_product-info">
                                <p className="cart_product-gost">ГОСТ 14911-82</p>
                                <h3 className="cart_product-description">Опора подвижная ОПБ2</h3>
                                <p className="cart_product-price">849.9 руб.</p>
                            </div>
                            <ul className="cart_product-counter product_counter">
                                <li><button className="cart_product-counter-btn product_counter-btn">+</button></li>
                                <li><input type='text' value='3' className="cart_product-counter-number product_counter-number"/></li>
                                <li><button  className="cart_product-counter-btn product_counter-btn">-</button></li>
                            </ul>
                            <p className="cart_product-price-sum">2 549.7 руб.</p>
                            <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
                        </li>
                        <li className="cart_product-item">
                            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
                            <div className="cart_product-info">
                                <p className="cart_product-gost">ГОСТ 14911-82</p>
                                <h3 className="cart_product-description">Опора подвижная ОПБ2</h3>
                                <p className="cart_product-price">849.9 руб.</p>
                            </div>
                            <ul className="cart_product-counter product_counter">
                                <li><button className="cart_product-counter-btn product_counter-btn">+</button></li>
                                <li><input type='text' value='3' className="cart_product-counter-number product_counter-number"/></li>
                                <li><button  className="cart_product-counter-btn product_counter-btn">-</button></li>
                            </ul>
                            <p className="cart_product-price-sum">2 549.7 руб.</p>
                            <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
                        </li>
                        <li className="cart_product-item">
                            <img src="./img/1m-(6)_1.png" className="cart_product-img" alt="миниатюра товара" width="120"/>
                            <div className="cart_product-info">
                                <p className="cart_product-gost">ГОСТ 14911-82</p>
                                <h3 className="cart_product-description">Опора подвижная ОПБ2</h3>
                                <p className="cart_product-price">849.9 руб.</p>
                            </div>
                            <ul className="cart_product-counter product_counter">
                                <li><button className="cart_product-counter-btn product_counter-btn">+</button></li>
                                <li><input type='text' value='3' className="cart_product-counter-number product_counter-number"/></li>
                                <li><button  className="cart_product-counter-btn product_counter-btn">-</button></li>
                            </ul>
                            <p className="cart_product-price-sum">2 549.7 руб.</p>
                            <img src="./img/trash_1.svg" alt="значок корзины" width="18" className="cart_remove-img"/>
                        </li>
                    </ul>
                    <div className="cart_clear">
                        <a href='#' className="cart_clear-link">
                        <img src="./img/trash_1.svg" className="cart_clear-img" alt="значок корзины" width="18"/>
                            Очистить корзину    
                        </a>
                    </div>
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
                            <p className="cart_order-total-sum">8 499 руб.</p>
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