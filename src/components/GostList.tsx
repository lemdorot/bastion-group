import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IProduct } from '../types/product';
import GostItem from './GostItem';

const GostList = ({addGostToArray}: {addGostToArray: (checked: boolean, gost: any) => void}) => {
    const { products } = useTypedSelector(state => state.product)

    const getGosts = (products: any) => {
        let result = new Set();

        products.forEach((prod: IProduct) => {
            result.add(prod.gost)
        });

        return Array.from(result)
    }

    return (
        <ul className="gosts_list title">
            {(getGosts(products)).map((gost: any) => 
                <GostItem addGostToArray={addGostToArray} gost={gost} />
            )}
        </ul>
    );
};

export default GostList;