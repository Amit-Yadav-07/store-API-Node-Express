require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

// DB connection
const connectDB = require('./DB/connection');
const productRoute = require('./routes/products');

// errors
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/api/v1/products', productRoute)


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is Listening on Port no ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()