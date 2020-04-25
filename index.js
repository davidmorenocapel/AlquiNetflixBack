const express = require('express');
const app = express();
const PORT = 3000;

//const filmsRouter = require('./routes/films');

app.use(express.json());

app.use('/films', require('./routes/films'));

app.listen(PORT, () => console.log('si me lees, eres bueno, muy bueno! y tu puerto esta en el ' +PORT));

module.exports = app;
