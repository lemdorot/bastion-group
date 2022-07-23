import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='page-header'>

            <section className='main-nav_wrapper'>           
                <nav className='main-nav'>
                    <ul className="main-nav_list">
                        <li className='main-nav_item'>
                            <Link to='/productTypeForm' className="main-nav_link">Типы продуктов</Link>
                        </li>
                        <li className='main-nav_item'>
                            <Link to='/productForm' className="main-nav_link">Продукты</Link>
                        </li>
                        <li className='main-nav_item'>
                            <a href="#" className="main-nav_link">Выгоды для вас</a>
                        </li>
                        <li className='main-nav_item'>
                            <a href="#" className="main-nav_link">Гарантии</a>
                        </li>
                        <li className='main-nav_item'>
                            <a href="#" className="main-nav_link">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <ul className="contacts_list">
                    <li className="contacts_item contacts-phone">
                        <a href="#">
                        <img src="./img/header/phone 1.svg" alt="значок телефон" width="15"/>
                        +7 (499) 380-78-90
                        </a>
                    </li>
                    <li className="contacts_item contacts-address"><a href="#" className="link address">
                        <img src="./img/header/Combined Shape.svg" alt="значок точка" width="15"/>
                        Москва
                        </a>
                    </li>
                    <li className="contacts_item contacts-mail">
                        <a href="mailto:info@bastion.pro" className="link">
                        <img src="./img/header/mail.svg" alt="значок конверт" width="15"/>
                        info@bastion.pro
                        </a>
                    </li>
                </ul>
            </section>

            <section className='logo-search_wrapper'>
                <a href="./index.html" target="_top" className="logo link">
                    <img src="./img/header/header__logo 1.png" alt="логотип компании" width="82"/>
                </a>
                <p className="logo-description">Производитель <br/> металлических <br/> изделий №1</p>

                <button type="button" className="catalog-btn">
                    <img src="./img/header/all-application.svg" alt="значок звездочка" width="20"/>
                    Каталог
                </button>
                
                <form action="#" method="get" className='search-form'>
                    <img src="./img/header/Vector (Stroke).svg" alt="поиск" width="20"/>
                    <input type="text" name="search" placeholder="Поиск по названию..." className="search-area"/>
                    <button type="submit"><img src="./img/header/corner-down-right.svg" alt="поиск" width="20"/></button>
                </form>

                <div className='logo-search_favorites'>
                    <img src="./img/header/star.svg" alt="значок звездочка" width="20"/>
                    <p className="logo-search-text">Избранное</p>
                </div>

                <div className='logo-search_card'>
                    <img src="./img/header/Union.svg" alt="значок корзина" width="20"/>
                    <p className="logo-search-text">Корзина</p>
                </div>

            </section>

            <section className='Breadcrumbs'>
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-item">
                        <a className="breadcrumbs-link" href="#">Главная</a>
                    </li>
                    <li className="breadcrumbs-item">
                        <a className="breadcrumbs-link" href="#">Интернет-магазин</a>
                    </li>
                    <li className="breadcrumbs-item">
                        <a className="breadcrumbs-link current" href="#">Опоры трубопроводов</a>
                    </li>
                </ul>
            </section>
        
        </header>
    );
};

export default Header;