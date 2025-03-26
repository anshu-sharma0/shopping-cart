import './index.css';
import RecipeReviewCard from './components/Card';
import Layout from './layout';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }

  useEffect(() => {
    fetchProducts();
  }
  ,[])
  
  return (
    <Layout >
      <RecipeReviewCard products={products} />
    </Layout>
  );
}

export default App;
