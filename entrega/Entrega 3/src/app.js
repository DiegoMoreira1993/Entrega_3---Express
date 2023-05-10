import express from 'express';
import ProductManager from './entrega3.js';
const app = express();
app.use(express.urlencoded({extended: true}));

const manager = new ProductManager()

app.get('/productManager', async (req, res) =>{
    
    let productos = await manager.getproduct();
    res.send(productos)
} )

app.get('/products', async (req, res) => {
    let {limit} = req.query;
    let products = await manager.getproduct()
    let response;
    if (limit){
        response = products.slice(0,limit)
        res.send(response)
    }else {
        res.send(products)
    }
})

app.get('/products/:pid', async (req, res) =>{
    let {pid} = req.params;
    let products = await manager.getproduct();
    let idEncontrado = products.find(product => product.id == pid)
        res.send(idEncontrado)
})


const server = app.listen(8080, () => console.log('Server running on port: 8080') )