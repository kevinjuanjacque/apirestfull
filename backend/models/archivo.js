const mongoose = require('mongoose');
const {Schema} =mongoose;

const filesShema =new Schema({
    IdAsignatura: {type: String, required:true },
    Trabajo: {type: String, required:true},
    Grupo: {type: String, required:true },
    FechaEntrega:{type: Date, required:true },
    Estado: {type:String,default:"vigente"}
    
}
);




module.exports=mongoose.model('archivo',filesShema);
