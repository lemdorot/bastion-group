import { IProduct } from './../types/product';
import { useMemo } from "react";

export const useGostFilters = (products: any[], gostFilter: string[]) => {
    const filteredGosts = useMemo(() => {
        if (gostFilter.length > 0) {
            let arr: any[] = []
            for (let i = 0; i < gostFilter.length; i++) {
                arr = [...arr, ...products.filter(product => product.gost.toLowerCase().includes(gostFilter[i].toLowerCase()))]
            } 
            return arr

        } else {
            return products
        }
    }, [gostFilter, products])

    return filteredGosts
}

export const useFilters = (products: any[], gostFilter: string[], priceFilter: {min: number, max: number}) => {
    const filteredGosts = useGostFilters(products, gostFilter)
    console.log(filteredGosts)
    console.log(priceFilter)
    const filteredPrice = useMemo(() => {
        return filteredGosts.filter(item => parseFloat(item.price) >= priceFilter.min && parseFloat(item.price) <= priceFilter.max)
    }, [priceFilter, filteredGosts])

    return filteredPrice
}



