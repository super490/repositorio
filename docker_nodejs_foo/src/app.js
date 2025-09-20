const express = require('express');
const app = express();
const port = 3000;

app.get('/',      (req, res) => res.send('Hola root!'));
app.get('/ping',  (req, res) => res.send('pong'));
app.get('/echo', (req, res) => res.send('Simple Express multi-stage API'));
app.get('/pong', (req, res) => res.send('ping'));
app.get('/bash', (req, res) => res.send('Es un interprete de comando'));

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
