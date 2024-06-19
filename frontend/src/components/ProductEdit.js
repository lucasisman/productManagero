import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err));
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
        title,
        price,
        description
        })
        .then(res => {
            navigate('/products/' + id);
        })
        .catch(err => console.log(err));
    };

    return (
        <form onSubmit={onSubmitHandler}>
        <div>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div>
            <label>Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div>
            <label>Description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <button type="submit">Update</button>
        </form>
    );
};

export default ProductEdit;
