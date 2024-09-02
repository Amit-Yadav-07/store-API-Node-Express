require('dotenv').config();

const connectDB = require('./DB/connection');
const productModal = require('./Models/products');
const products = require('./products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await productModal.deleteMany();
        await productModal.create(products);
        console.log('success');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


start();