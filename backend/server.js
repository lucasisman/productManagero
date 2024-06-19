const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/productmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productRoutes = require('./routes/productRoutes');
app.use('/', productRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
