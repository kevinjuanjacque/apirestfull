const asignaturaControles={};

//se importa los modelos de user
const asignaturaModel= require('../models/asignatura')

const jwt=require('jsonwebtoken');
const fs = require('fs');
const asignatura = require('../models/asignatura');

//Metodo post obtener los usuarios
asignaturaControles.obtenerAsignaturas = async (req,res)=>{
    return res.json(await asignaturaModel.find());
}

//Metodo post para igresar usuarios
asignaturaControles.createAsignatura = async (req,res)=>{
    const {Asignatura,Bloques,HoraInicio,HoraFin}=req.body;
    const AsignaturaNueva =new asignaturaModel({Asignatura,Bloques,HoraInicio,HoraFin});
    const veri=await asignaturaModel.findOne({Asignatura});
    if(!veri){
        await AsignaturaNueva.save();
        res.status(200).json("asignatura creada");
    }
    else{
        return res.status(401).json('Asignatura ya existente');
    }
};

//eliminar asugnature

asignaturaControles.eliminar =  async (req,res) =>{
    const { id } =req.params;
    await asignaturaModel.findByIdAndDelete(id);
    res.json('usuario eliminado con exito');
}
asignaturaControles.buscar =  async (req,res) =>{
    const { id } =req.params;
    const asig= await asignaturaModel.findById(id);
    if(!asig){
        return res.json("No se encontro asignatura");
    }
    res.json(asig);
}


asignaturaControles.crearVarias=async(req,res)=>{
    const asignaturas=req.body;
    try {
        await asignaturaModel.saveAll(asignaturas)
        res.json('todo bien');
    } catch (error) {
        res.json('error');
    }
    
}




module.exports=asignaturaControles;

