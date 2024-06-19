const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to the database'))
    .catch(err => console.log('Failed to connect to the database', err));
