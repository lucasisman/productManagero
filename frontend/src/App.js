import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        console.log('Data fetched from API:', res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
  };

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <ProductForm setProducts={setProducts} />
      <ProductList products={products} removeFromDom={removeFromDom} />
      <Routes>
        <Route path="/products/:id" element={<ProductDetail removeFromDom={removeFromDom} />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
      </Routes>
    </div>
  );
};

export default App;
