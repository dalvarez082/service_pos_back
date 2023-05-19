const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde tu backend de Express!');
});

app.listen(3002, () => {
  console.log('Servidor escuchando en el puerto 3002');
});
