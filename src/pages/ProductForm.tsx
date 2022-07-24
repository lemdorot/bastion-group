import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { IProduct } from '../types/product';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductForm = () => {
    const {addProduct} = useActions()
    const { productTypes } = useTypedSelector(state => state.productType)
    const { products, success, error } = useTypedSelector(state => state.product)
    const [product, setProduct] = useState<IProduct>({name: '', id: 0, productTypeId: 0, price: 0, gost: ''})
    const [nameError, setNameError] = useState('')
    const [productTypeIdError, setProductTypeIdError] = useState('')
    const [priceError, setPriceError] = useState('')
    const [gostError, setGostError] = useState('')

    const addNewProduct = (e: any, product: IProduct) => {
      e.preventDefault()
      if(validate(product)) {
        product.id = Date.now()
        addProduct(product)
        setProduct({name: '', id: 0, productTypeId: 0, price: 0, gost: ''});
      }
    }

    const validate = (product: IProduct) => {
      let val = true
      if (product.name === '') {
        setNameError('Название не может быть пустым')
        val = false
      }
      if (product.productTypeId === 0) {
        setProductTypeIdError('Тип продукта не может быть пустым')
        val = false
      }
      if (product.price < 0) {
        setPriceError('Цена не может быть отрицательной')
        val = false
      } else if (product.price == 0) {
        setPriceError('Цена не может быть равной нулю')
        val = false
      }
      if (product.gost === '') {
        setGostError('Гост не может быть пустым')
        val = false
      }
      return val
    }

    const nameHandler = (e: any) => {
      setProduct({...product, name: e.target.value})
      if (e.target.value === '') {
        setNameError('Название не может быть пустым')
      } else {
        setNameError('')
      }
    }

    const productTypeIdHandler = (e: any) => {
      setProduct({...product, productTypeId: e.target.value})
      if (e.target.value === '') {
        setProductTypeIdError('Тип продукта не может быть пустым')
      } else {
        setProductTypeIdError('')
      }
    }

    const priceHandler = (e: any) => {
      setProduct({...product, price: Number(parseFloat(e.target.value).toFixed(2))})
      if (e.target.value === '') {
        setPriceError('Цена не может быть пустой')
      } else if (e.target.value == 0) {
        setPriceError('Цена не может быть равной нулю')
      } else {
        setPriceError('')
      }
    }

    const gostHandler = (e: any) => {
      setProduct({...product, gost: e.target.value})
      if (e.target.value === '') {
        setGostError('Гост не может быть пустым')
      } else {
        setGostError('')
      }
    }

    return (
      <main className='main'>
          <form action="#" className="product_form">
              <h3 className='product_form-title'>Добавление продукта</h3>
              <input  type='text' 
                      value={product.name} 
                      onChange={nameHandler} 
                      className='product_form-input' 
                      placeholder='Введите название продукта' 
              />
              {nameError ?  <p className="product_form-error">{nameError}</p> : ''}
              <select 
                  value={product.productTypeId}
                  onChange={productTypeIdHandler}
                  className='product_form-input'
              >
                  <option disabled value="0">Тип не указан</option>
                  {productTypes.map(option => 
                      <option key={option.id} value={option.id}>
                          {option.name}
                      </option>
                  )}
              </select>
              {productTypeIdError ?  <p className="product_form-error">{productTypeIdError}</p> : ''}
              <input  type='number' 
                      value={product.price} 
                      onChange={priceHandler} 
                      className='product_form-input' 
                      placeholder='Введите цену продукта' 
                      step="0.01"
              />
              {priceError ?  <p className="product_form-error">{priceError}</p> : ''}
              <input  type='text' 
                      value={product.gost} 
                      onChange={gostHandler} 
                      className='product_form-input' 
                      placeholder='Введите гост продукта' 
              />
              {gostError ?  <p className="product_form-error">{gostError}</p> : ''}
              
              <input
                type='submit'
                className='product_form-button' 
                onClick={(e) => {
                  addNewProduct(e, product)
                }}
                value='Добавить продукт'
                />
              {success ?  <p className="product_form-success">{success}</p> : ''}
              {error ?  <p className="product_form-error">{error}</p> : ''}

              <Link to='/' className="product_form-back-link">Вернуться на главную страницу</Link>
            </form>
      </main>
    );
};

export default ProductForm;