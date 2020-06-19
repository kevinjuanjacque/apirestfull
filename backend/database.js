const mongoose= require('mongoose');

const URI = 'mongodb://localhost:27017/ASIGNATURAS'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('*****CONECTADO A LA BASE DE DATOS CON EXITO'))
    .catch(err => console.error(err+" ***ESE FUE EL ERROR DE CONEXION"));
module.exports = mongoose;