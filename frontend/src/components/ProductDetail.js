import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ removeFromDom }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }, [id]);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/products/' + id)
        .then(res => {
            removeFromDom(id);
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={deleteProduct}>Delete</button>
        <Link to={`/products/${id}/edit`}>Edit</Link>
        </div>
    );
};

export default ProductDetail;
