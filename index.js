const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//La ruta que pongamos aqui, sera la raiz en el archivo que requitamos
app.use('/films', require('./routes/films'));
app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));

app.listen(PORT, () => console.log('si me lees, eres bueno, muy bueno! y tu puerto esta en el ' +PORT));

module.exports = app;
