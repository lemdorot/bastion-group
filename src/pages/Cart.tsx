import React, { useState } from 'react';
import CartList from '../components/CartList';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface IOrder {
    name: string,
    phone: number,
    email: string,
    company: string
}

const Cart = () => {
    const { carts } = useTypedSelector(state => state.cart)
    const [ order, setOrder ] = useState<IOrder>({name: '', phone: 0, email: '', company: ''})
    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [companyError, setCompanyError] = useState('')

    const getSumPrices = (carts: any[]) => {
        let result = carts.reduce(function(sum, current) {
            return sum + current.sum;
          }, 0);

        return result.toFixed(2)
    }

    const postOrder = (e: any, carts: any[], order: IOrder) => {
        e.preventDefault()
        if (validate(order)) {
            console.log(`Имя покупателя: ${order.name}`)
            console.log(`Номер телефона: ${order.phone}`)
            console.log(`Email: ${order.email}`)
            console.log(`Организация / ИНН: ${order.company}`)
            console.log(`Ваш заказ:`)
            carts.map(cart => 
                console.log(`Название: ${cart.product.name}, количество: ${cart.count}, сумма: ${cart.sum}`)
            )
            console.log(`Итого: ${getSumPrices(carts)}`)
        }
        setOrder({name: '', phone: 0, email: '', company: ''})
    }

    const validate = (order: IOrder) => {
        let val = true
        if (order.name === '') {
            setNameError('Название не может быть пустым')
            val = false
        }
        if (order.phone === 0) {
            setPhoneError('Телефон не может быть пустым')
            val = false
        }
        if (order.email === '') {
            setEmailError('Почта не может быть пустой')
            val = false
        }
        if (order.company === '') {
            setCompanyError('Организация не может быть пустой')
            val = false
        }
        return val
    }

    const nameHandler = (e: any) => {
        setOrder({...order, name: e.target.value})
        if (e.target.value === '') {
          setNameError('Название не может быть пустым')
        } else {
          setNameError('')
        }
    }

    const phoneHandler = (e: any) => {
        setOrder({...order, phone: e.target.value})
        if (e.target.value === '') {
          setPhoneError('Телефон не может быть пустым')
        } else {
          setPhoneError('')
        }
    }

    const emailHandler = (e: any) => {
        setOrder({...order, email: e.target.value})
        if (e.target.value === '') {
          setEmailError('Почта не может быть пустой')
        } else {
          setEmailError('')
        }
    }

    const companyHandler = (e: any) => {
        setOrder({...order, company: e.target.value})
        if (e.target.value === '') {
          setCompanyError('Организация не может быть пустой')
        } else {
          setCompanyError('')
        }
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
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Иванов Иван Иванович" 
                                        className="form-input current"
                                        value={order.name}
                                        onChange={nameHandler}
                                    />
                                </div>
                                {nameError ?  <p className="product_form-error">{nameError}</p> : ''}
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/phone_2.svg" alt="значок телефонв" width="14"/>
                                <input 
                                    type="tel" 
                                    name="phonenumber" 
                                    placeholder="Контактный телефон" 
                                    className="form-input"
                                    value={order.phone}
                                    onChange={phoneHandler}
                                />
                                {phoneError ?  <p className="product_form-error">{phoneError}</p> : ''}
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/at-sign_1.svg" alt="значок имейла" width="14"/>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="form-input"
                                    value={order.email}
                                    onChange={emailHandler}
                                />
                                {emailError ?  <p className="product_form-error">{emailError}</p> : ''}
                            </li>
                            <li className="cart_order-info-item">
                                <img src="./img/briefcase_1.svg" alt="значок чемодана" width="14"/>
                                <input 
                                    type="text" 
                                    name="org" 
                                    placeholder="Организация / ИНН" 
                                    className="form-input"
                                    value={order.company}
                                    onChange={companyHandler}
                                />
                                {companyError ?  <p className="product_form-error">{companyError}</p> : ''}
                            </li>
                        </ul>
                        
                        <div className="cart_order-total">
                            <p className="cart_order-total-text">Итого</p>
                            <p className="cart_order-total-sum">{getSumPrices(carts)} руб.</p>
                        </div>

                        <button type="submit" onClick={(e) => postOrder(e, carts, order)} className="cart_order-btn">
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