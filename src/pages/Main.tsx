import React, { useState } from 'react';
import GostList from '../components/GostList';
import ProductList from '../components/ProductList';
import { useFilters } from '../hooks/useFilters';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main = () => {
    const { products } = useTypedSelector(state => state.product)
    const [gostFilter, setGostFilter] = useState<string[]>([])
    const filteredProducts = useFilters(products, gostFilter);

    const addGostToArray = (checked: boolean, gost: string) => {
        if (checked) {
            setGostFilter([...gostFilter, gost])
        } else {
            setGostFilter(gostFilter.filter((g: string) => g != gost))
        }
    }

    return (
        <main className='main'>
            <section className='main_sort'>
                <p className="main_sort-title">
                    <a href='#'>
                        <img src="./img/arrow_left.svg" alt="" className="main_sort-img" width='11.67' />
                    Опоры трубопроводов
                    </a>
                </p>
                <div className="main_sort-wrapper">
                    <p className="main_sort-text">Сначала популярные</p>
                    <a className="main_sort-icon-link" href="#">
                        <img src="./img/sort.svg" alt="" className="main_sort-icon" />
                    </a>
                    <div className="view_wrapper">
                        <a href="#" className='view_link'>
                            <img src="./img/view_icon.svg" alt="" className="view_img" />
                        </a>
                        <a href="#" className='view_link'>
                            <img src="./img/view_list.svg" alt="" className="view_img" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="main_wrapper">
                <aside className="main_filter">
                    <div className="category title">
                        <h2 className="category_title title">
                            <img src="./img/category.svg" alt="" className="category_title-img" />
                            Категории
                        </h2>
                        <ul className="category_list">
                            <li className="category_item">
                                <p className="category_type">Серия 5.904-1 выпуск 1:</p>
                                <p className="category_name">
                                    Детали крепления воздуховодов
                                    <span className="category_count">95</span>
                                    </p>
                            </li>
                            <li className="category_item">
                                <p className="category_type">Серия 4.903-10 Выпуск 4,5,6:</p>
                                <p className="category_name">
                                    Изделия и детали трубопроводов для тепловых сетей 
                                    <span className="category_count">15</span>
                                    </p>
                            </li>
                            <li className="category_item">
                                <p className="category_type">Серия 4.900-9 Выпуск 1: </p>
                                <p className="category_name">
                                    Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации
                                    <span className="category_count">247</span>
                                    </p>
                            </li>
                            <li className="category_item">
                                <p className="category_type">Серия 3.900-9: </p>
                                <p className="category_name">
                                    Опорные конструкции и средства крепления трубопроводов
                                    <span className="category_count">2</span>
                                    </p>
                            </li>
                            <li className="category_item">
                                <p className="category_type">Л8-508.000 - Л8-524.000:</p>
                                <p className="category_name">
                                    Опоры и подвески трубопроводов Дн&lt;89мм
                                    <span className="category_count">15</span>
                                    </p>
                            </li>
                            <li className="category_item">
                                <p className="category_type">Л8-138.000 - Л8-200.000:</p>
                                <p className="category_name">
                                    Опоры и подвески станционных трубопроводов
                                    <span className="category_count">247</span>
                                    </p>
                            </li>
                        </ul>
                        <a href="#" className="category_view-all">Показать все</a>
                    </div>
                    <div className="filters">
                        <h2 className="filters_title title">
                            <img src="./img/filter.svg" alt="" className="filters_title-img" />
                            Фильтры
                        </h2>
                        <ul className="filters_list">
                            <li className="filters_item filter title">
                                <h3 className="filter_title">Цена, руб.</h3>
                                <div className="filter_input-wrapper">
                                    <input type="text" className="filter_input" value='от 104'/>
                                    <input type="text" className="filter_input" value='до 9990' />
                                </div>
                                <div className="filter_slider">
                                </div>
                            </li>
                            <li className="filters_item filter">
                                <h3 className="filter_title title">
                                    Тип продукта
                                    <img src="./img/Union.svg" alt="" className="filter_img" />
                                </h3>
                            </li>
                            <li className="filters_item filter">
                                <h3 className="filter_title title">
                                    Бренд
                                    <img src="./img/Union.svg" alt="" className="filter_img" />
                                </h3>
                            </li>
                        </ul>
                        <div className='filter_check-wrapper title'>
                            <input type="checkbox" name="filter" value="choice" id="choice"/>
                            <label htmlFor="choice">Выбор покупателей</label>
                        </div>
                        <div className='filter_check-wrapper'>
                            <input type="checkbox" name="filter" value="price" id="price"/>
                            <label htmlFor="price">Лучшая цена</label>
                        </div>
                        <div className="filter_button-wrapper">
                            <button onClick={() => console.log(gostFilter)} className='filter_button'>Сбросить фильтры</button>
                        </div>
                    </div>
                </aside>
                <section className="products">
                    <GostList addGostToArray={addGostToArray} />
                    <ProductList products={filteredProducts}/>
                </section>
            </section>

            <section className="pagination">
                <p className="pagination_text">Выводить по</p>
                <ul className="pagination_counter">
                    <li><a href="#" className="item current">9</a></li>
                    <li><a href="#" className="item">15</a></li>
                    <li><a href="#" className="item">21</a></li>
                </ul>
                <ul className="pagination_list">
                    <li><a href="#" className="item">
                        <img src="./img/products/arrow-left.svg" alt="стрелочка влево" width="14"/>
                    </a></li>
                    <li><a href="#" className="item current">1</a></li>
                    <li><a href="#" className="item">2</a></li>
                    <li><a href="#" className="item">3</a></li>
                    <li><a href="#" className="item">4</a></li>
                    <li><a href="#" className="item">5</a></li>
                    <li><a href="#" className="item">
                        <img src="./img/products/arrow-right.svg" alt="стрелочка вправо" width="14"/>
                    </a></li>
                </ul>

                <a href="#" className="more">Показать все товары</a>
            </section>
            <section className="description">
                <h2 className='description_title'>Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1</h2>
                <p className='description_text'>Надежность работы трубопровода в значительной мере зависит от правильности и прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие части опорных конструкций.
                <br/>
                Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.</p>
                
                <p className='description_text'>Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных участков трубопровода.
                Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.</p>
                
                <p className='description_text'>Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при температуре от -60°C.<br/>
                Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и несущей
                способностью.</p>
                
                <p className='description_text'>Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают требованиям СНиП III-18-75,
                СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.
                </p>
                <a href="#" className="description_link">Скрыть описание
                    <img src="./img/main/chevron-up.svg" className="description_link-img" alt="стрелочка вверх" width="8"/>
                </a>
            </section>
        </main>
    );
};

export default Main;