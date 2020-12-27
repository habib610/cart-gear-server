import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';

const app = express();
mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/cartgear', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const port = process.env.PORT || 4000;

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(pd => pd._id === req.params.id);
    if(!product) {
        res.status(404).send({message: "Product Not found"})
    }
    else {
        res.status(200).send(product)
    }

})


app.get('/api/products', (req, res) => {
    res.send(data.products)
})

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