import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from "cors";
import productsRouter from './src/routes/products.router.js';
import usersRouter from './src/routes/users.router.js';
import rutaNoEncontrada from './src/middlewares/error.middleware.js';

const app = express();

app.use(express.json()); 
app.use(cors());


app.get('/', (req, res) => {
    res.send(
        `<h1>Api de Productos</h1>
         <p>Servidor funcionando correctamente</p>
         `);       
});

//probando req.params
// app.get("/parametros/:uid", (req, res) => {
//   console.log(req.params);
//   const { uid } = req.params;
//   res.send("Prueba: " + uid);
// });

// app.get('/query/params', (req, res) => {
//   console.log(req.query);
//   const {id} = req.query;
//   res.send(`Query params: ${id}`);
// });


app.use('/api/products', productsRouter);
app.use(usersRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

//Middleware para manejar rutas no encontradas

// app.use ((req, res) => {
//   res.status(404).json({error: 'Ruta no encontrada'})
// })

app.use(rutaNoEncontrada);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

