import React from 'react'
import Layout from '../../layout'
import { useSelector } from 'react-redux';
import RecipeReviewCard from '../Card';

const Cart = () => {
  const cartValue = useSelector((state) => state);
  console.log({cartValue})
  return (
    <Layout>
      <RecipeReviewCard products={cartValue?.cartSlice} />
    </Layout>
  )
}

export default Cart