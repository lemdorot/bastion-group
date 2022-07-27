import { IProduct } from './../types/product';
import { useMemo } from "react";

export const useGostFilter = (products: any[], gostFilter: string[]) => {
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

export const usePriceFilter = (products: any[], gostFilter: string[], priceFilter: {min: number, max: number}) => {
    const filteredGosts = useGostFilter(products, gostFilter)

    const filteredPrice = useMemo(() => {
        if (priceFilter.min == 0 && priceFilter.max == 0) {
            return filteredGosts
        }else {
            return filteredGosts.filter(item => parseFloat(item.price) >= priceFilter.min && parseFloat(item.price) <= priceFilter.max)
        }
    }, [priceFilter, filteredGosts])

    return filteredPrice
}

export const useFilters = (
                products: any[], 
                gostFilter: string[], 
                priceFilter: {min: number, max: number}, 
                productTypeId: number) => {

    const filteredPrice = usePriceFilter(products, gostFilter, priceFilter)

    const filteredProductType = useMemo(() => {
        if (productTypeId == 0) {
            return filteredPrice
        }else {
            return filteredPrice.filter(item => item.productTypeId == productTypeId)
        }
    }, [productTypeId, filteredPrice])

    return filteredProductType
}



