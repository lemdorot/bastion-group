import Nouislider from 'nouislider-react';
import React, { useState } from 'react';
import "nouislider/distribute/nouislider.css"

const PriceSlider = ({ min, max, getPriceFilter }: 
    { min: number, max: number, 
        getPriceFilter: (min: number, max: number) => {min: number, max: number} }) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)

    const displaySlider = (e: any) => {
        setMinValue(e[0])
        setMaxValue(e[1])
        getPriceFilter(e[0], e[1])
    }
    const Slider = () => (
        <Nouislider 
        range={{ min: min, max: max }} start={[min.toString(), max.toString()]}
        connect onChange={displaySlider}
        />
    )
    
    return (
        <li className="filters_item filter title">
            <h3 className="filter_title">Цена, руб.</h3>
            <div className="filter_input-wrapper">
                <div>
                    <input type="text" className="filter_input" value={minValue.toString()}/>
                    <span className="filter_text">от</span>
                </div>
                <div>
                    <input type="text" className="filter_input" value={maxValue.toString()} />
                    <span className="filter_text">до</span>
                </div>
            </div>
            <div className="filter_slider">
                {Slider()}
            </div>
        </li>
    );
};

export default PriceSlider;