import express from 'express';
import productsRouter from './src/routes/products.router.js';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send(
        `<h1>Api de Productos</h1>
         <p>Servidor funcionando correctamente</p>
         `);       
});

app.use(productsRouter);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

