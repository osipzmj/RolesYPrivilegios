const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

//Creacion del servidor
const app = express();

//Conectamos a la DB
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/usuario', require('./routes/usuario'));
app.use('/roles', require('./routes/roles'));
app.use('/privilegios', require('./routes/privilegios'));


app.listen(4000, () => {
    console.log('El servidor esta funcionando correctamente')
})