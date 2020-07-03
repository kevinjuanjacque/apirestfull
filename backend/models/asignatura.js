const mongoose = require('mongoose');
const {Schema} =mongoose;

const AsignaturaSchema =new Schema({
    Asignatura: {type: String, required:true},
    Bloques: {type: Number,required:true},
    HoraInicio: {type: String, required:true},
    HoraFin: {type: String, required:true}
});


module.exports=mongoose.model('Asignatura',AsignaturaSchema);