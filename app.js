const express = require('express');
const app = express();
const port = 3000;

// Define una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escucha las solicitudes en el puerto especificado
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
