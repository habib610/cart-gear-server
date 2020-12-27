import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';

const app = express();
mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/cartgear', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const port = process.env.PORT || 4000;




app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.use('/api/users', userRouter);

app.use((err, req, res, next)=> {
    res.status(500).send({message: err.message})
})

app.listen(port, ()=> {
    console.log("listening port 4000")
})