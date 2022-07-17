import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <section className="footer-form">
                <form action="#" method="post">
                    <input type="text" name="username" placeholder="Ваше имя" className="footer-form_input"/>
                    <input type="tel" name="phonenumber" placeholder="Ваш телефон" className="footer-form_input"/>
                    <div className='footer-form_wrapper'>
                        <button type="submit" className="footer-form_btn">Заказать звонок</button>
                        <p className="footer-form_text-small grey">Нажимая на кнопку вы соглашаетесь <br/> с 
                            <a href="#" className="bold"> политикой конфиденциальности.</a>
                        </p>
                    </div>
                </form>
            </section>
            <div className="footer_wrapper">
                <a href="./index.html" className="footer_logo">
                    <img src="./img/footer__logo_1.png" alt="логотип компании" width="103"/>
                </a>
                <ul className='footer_link-list'>
                    <li className='footer_link-item'>
                        <a className='footer_link' href="#">Металлоконструкции</a>
                    </li>
                    <li className='footer_link-item'>
                        <a className='footer_link' href="#">Порошковая покраска</a>
                    </li>
                </ul>
                <ul className='footer_link-list'>
                    <li className='footer_link-item'>
                        <a className='footer_link' href="#">Фасаднцые конструкции</a>
                    </li>
                    <li className='footer_link-item'>
                        <a className='footer_link' href="#">Светопрозрачные конструкции</a>
                    </li>
                </ul>
                <address className='footer_adress-list'>
                    <ul>
                        <li>
                            <a href="#" className='footer_adress-phone'>+7 (499) 380-78-90</a>
                        </li>
                        <li>
                            <a href="#" className='footer_adress-email'>info@bastion.pro</a>
                        </li>
                    </ul>
                </address>
            </div>
            <div className="footer_social-wrapper">
                <p className='footer_text'>Ⓒ 2020 Все права защищены | Политика конфиденциальности</p>
                <ul className="social">
                    <li>
                        <a href="#" className="social_link fa-brands fa-viber"></a>
                    </li>
                    <li>
                        <a href="#" className="social_link fa-brands fa-telegram"></a>
                    </li>
                    <li>
                        <a href="#" className="social_link fa-brands fa-vk"></a>
                    </li>
                    <li>
                        <a href="#" className="social_link fa-brands fa-instagram-square"></a>
                    </li>
                    <li>
                        <a href="#" className="social_link fa-brands fa-facebook-f"></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;