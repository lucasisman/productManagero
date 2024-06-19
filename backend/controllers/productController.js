const Product = require('../models/productModel');

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
    },
    getProductById: (req, res) => {
        Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
    },
    createProduct: (req, res) => {
        Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err));
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
    },
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
    }
};
