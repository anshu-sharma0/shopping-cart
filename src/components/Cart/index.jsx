import React from 'react'
import Layout from '../../layout'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { removeFromCart } from '../../redux/actions/product-action';

const Cart = () => {
  const cart = useSelector((state) => state.cartProducts.cart);
  const dispatch = useDispatch()

  const renderList = cart.map((product) => {
    const { id, title, image, price, category } = product;
    const handleRemove = (product) => {
      dispatch(removeFromCart(product))
    }

    return (
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300" key={id}>
        <Link to={`/product/${id}`} className="w-full">
          <div className="w-full h-64 bg-gray-100 flex justify-center items-center p-4">
            <img src={image} alt={title} className="object-contain max-h-full max-w-full" style={{mixBlendMode: 'multiply'}} />
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mt-1">{category}</p>
            <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
            <div className='flex justify-between items-center mt-2'>
              <div>
                <p className="text-xl font-bold text-green-600 mt-2">${price}</p>
              </div>
              <Button variant="outlined" onClick={(e) => {
                e.preventDefault();
                handleRemove(product)
              }}>
                Remove from Cart
              </Button>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {renderList}
      </div>
    </Layout>
  )
}

export default Cart
