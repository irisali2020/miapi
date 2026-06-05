// src/middlewares/error.middleware.js

const rutaNoEncontrada = (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
};

// Exportación moderna en ES Modules
export default rutaNoEncontrada;