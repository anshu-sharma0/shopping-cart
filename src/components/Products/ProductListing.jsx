import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../../redux/actions/product-action'

const ProductListing = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    console.log({products})
    
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Err', err)
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    } ,[])

    return (
        <ProductComponent />
    )
}

export default ProductListing