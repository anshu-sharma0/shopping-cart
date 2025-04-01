import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../../redux/actions/product-action'
import { useDispatch, useSelector } from 'react-redux';

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

    return (
        <Layout>
            <div className="flex justify-center items-center py-12 px-4 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 flex flex-col lg:flex-row">
                    {/* Product Image */}
                    <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                        <img src={image} alt={title} className="object-contain max-h-96 rounded-lg shadow-md" />
                    </div>

                    {/* Product Data */}
                    <div className="lg:w-1/2 flex flex-col justify-start ml-0 lg:ml-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
                        <p className="text-lg font-bold text-green-600 mb-2">${price}</p>
                        <p className="text-sm text-gray-600 mb-4"><span className="font-medium">Category:</span> {category}</p>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Description:</h3>
                            <p className="text-base text-gray-700">{description}</p>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => window.history.back()}
                                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                            >
                                Back to Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;
