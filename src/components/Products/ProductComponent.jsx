import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../layout';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        console.log({ product })
        const { id, title, image, price, category } = product;
        return (
            <Layout>
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300" key={id}>
                    <Link to={`/product/${id}`} className="w-full">
                        <div className="w-full h-64 bg-gray-100 flex justify-center items-center p-4">
                            <img src={image} alt={title} className="object-contain max-h-full max-w-full" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
                            <p className="text-xl font-bold text-green-600 mt-2">${price}</p>
                            <p className="text-sm text-gray-600 mt-1">{category}</p>
                        </div>
                    </Link>
                </div>
            </Layout>
        )
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {renderList}
        </div>
    )
}

export default ProductComponent;
