const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Ruta para obtener todos los productos
router.get('/api/products', ProductController.getAllProducts);

// Ruta para obtener un producto por id
router.get('/api/products/:id', ProductController.getProductById);

// Ruta para crear un nuevo producto
router.post('/api/products', ProductController.createProduct);

// Ruta para actualizar un producto
router.put('/api/products/:id', ProductController.updateProduct);

// Ruta para eliminar un producto
router.delete('/api/products/:id', ProductController.deleteProduct);

module.exports = router;
