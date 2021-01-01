import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';
import orderRouter from './router/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/cartgear', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const port = process.env.PORT || 4000;




app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/users', userRouter);
app.get('/api/config/paypal', (req, res)=> {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.get('/', (req, res) => {
    res.send('Server is Running')
})


app.use((err, req, res, next)=> {
    res.status(500).send({message: err.message})
})

app.listen(port, ()=> {
    console.log("listening port 4000")
})