const tareaControles={};

const tareaModel= require('../models/archivo');
const { update } = require('../models/archivo');


tareaControles.createTarea = async (req,res)=>{
    const {IdAsignatura,Trabajo,Grupo,FechaEntrega}=req.body;
    const usuarioNuevo =new tareaModel({IdAsignatura,Trabajo,Grupo,FechaEntrega});
    
    const veri=await tareaModel.findOne({Trabajo});
    if(!veri){
        await usuarioNuevo.save();
        res.status(200).json("Tarea creada");
    }
    else{
        return res.status(401).json('Tarea ya existente');
    }
};
//return tareas

tareaControles.obtenerTareas = async (req,res)=>{
    const tareas=(await tareaModel.find())
    for(var i=0;i<tareas.length;i++){
        const FechaEntrega=(tareas[i].FechaEntrega);
        const FechaHoy=new Date();
        
        if(FechaEntrega<FechaHoy && tareas[i].Estado!="Caducado" ){
            tareas[i].Estado="Caducado";
            const nuevo =tareas[i];
            await tareaModel.findByIdAndUpdate(tareas[i]._id,nuevo )
            console.log("actualizado")
        }
    }
    
    return res.json(await tareaModel.find());
};

tareaControles.eliminarTarea= async(req,res)=>{
    const {id} = req.param;
    const elim=await tareaModel.findById(id)
    await tareaModel.findOneAndDelete(elim);
    return res.json("Tarea eliminada con exito")
}


module.exports=tareaControles;