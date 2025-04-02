import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { addToCart, selectedProduct } from '../../redux/actions/product-action'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout';
import { Button } from '@mui/material';

const ProductDetails = () => {

    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Err: ', err)
        });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        fetchProductDetail()
    }, [productId]);

    const handleAddCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <Layout>
            <div className="flex justify-center items-center py-12 px-4 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                        <img src={image} alt={title} className="object-contain max-h-96 rounded-lg shadow-md" />
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-start ml-0 lg:ml-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
                        <p className="text-lg font-bold text-green-600 mb-2">${price}</p>
                        <p className="text-sm text-gray-600 mb-4"><span className="font-medium">Category:</span> {category}</p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Description:</h3>
                            <p className="text-base text-gray-700">{description}</p>
                        </div>

                        <div className="flex justify-center mt-6 gap-6">
                            <Button variant="outlined" className='!rounded-lg shadow-lg focus:outline-none' onClick={(e) => {
                                e.preventDefault();
                                handleAddCart(product)
                            }}>
                                Add to Cart
                            </Button>
                            <Link to={'/'}>
                                <button
                                    className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                                >
                                    Back to Products
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;
