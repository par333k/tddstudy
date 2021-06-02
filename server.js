const express = require('express');
const productRoutes = require('./routes');
const config = require('./config');
const PORT = 5000;

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes)
const mongoose = require('mongoose');

mongoose.connect(config.MongoDBURI,
{
   useNewUrlParser: true,
   useUnifiedTopology: true
    }).then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));

app.use((error,req, res, next) => {
    res.status(500).json({ message: error.message });
})
app.listen(PORT);
console.log(`Running on port ${PORT}`)

module.exports = app;
