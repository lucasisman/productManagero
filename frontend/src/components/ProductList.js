import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ products, removeFromDom }) => {
    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => removeFromDom(productId))
        .catch(err => console.log(err));
    };

    return (
        <div>
        <h2>All Products:</h2>
        {products.map((product, index) => (
            <div key={index}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        ))}
        </div>
    );
};

export default ProductList;
