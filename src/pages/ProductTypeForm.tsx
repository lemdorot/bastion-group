import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { IProductType } from '../types/productType';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductForm = () => {
    const {addProductType} = useActions()
    const { productTypes, success, error} = useTypedSelector(state => state.productType)
    const [ name, setName ] = useState('')
    const [ nameError, setNameError ] = useState('')

    const addNewProductType = (e: any, name: string) => {
      e.preventDefault()
      if (name !== '') {
        const productType: IProductType = {
          id: Date.now(),
          name,
        }
        addProductType(productType)
        setName('')
      } else {
        setNameError('Название не может быть пустым')
      }
    }

    const nameHandler = (e: any) => {
      setName(e.target.value)
      if (e.target.value === '') {
        setNameError('Название не может быть пустым')
      } else {
        setNameError('')
      }
    }

    return (
        <main className='main'>
            <form action="#" className="product_form">
              <h3 className='product_form-title'>Добавление типа продукта</h3>
              <input  type='text' 
                      value={name} 
                      onChange={nameHandler} 
                      className='product_form-input' 
                      placeholder='Введите название типа продукта' 
              />
              {nameError ?  <p className="product_form-error">{nameError}</p> : ''}
              <input 
                type='submit'
                className='product_form-button' 
                onClick={(e) => addNewProductType(e, name)}
                value='Добавить тип продукта'
                />
                  
              {success ?  <p className="product_form-success">{success}</p> : ''}
              {error ?  <p className="product_form-error">{error}</p> : ''}

              <Link to='/' className="product_form-back-link">Вернуться на главную страницу</Link>
            </form>
        </main>
    );
};

export default ProductForm;