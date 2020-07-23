const mongoose= require('mongoose');

const URI = "mongodb+srv://admin:Admin2020@bibliotecaicci.ker7x.gcp.mongodb.net/bibliotecaicci?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('*****CONECTADO A LA BASE DE DATOS CON EXITO'))
    .catch(err => console.error(err+" ***ESE FUE EL ERROR DE CONEXION"));
module.exports = mongoose;