import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div>
        <h2>Product List</h2>
        <ul>
            {products.map(product => (
            <li key={product._id}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;
