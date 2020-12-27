import express from 'express';
import data from './data.js';

const app = express();

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

app.listen(port, ()=> {
    console.log("listening port 4000")
})