const express=require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const asignatura = require('../controller/asignaturas.controles');
const tarea = require('../controller/tarea.controles');







router.get('/api/Asignaturas',asignatura.obtenerAsignaturas);
router.post('/api/createAsignatura',asignatura.createAsignatura);
router.delete('/api/createAsignatura/:id',asignatura.eliminar);
router.get('/api/asignaturaEspecifica/:id',asignatura.buscar);

router.post('/api/createTareas',tarea.createTarea);
router.get('/api/Tareas',tarea.obtenerTareas);
router.delete('/api/eliminarTarea/:id',tarea.eliminarTarea);




function verificacionToken (req,res,next)  {
   
    
    if(!req.headers.authorization){return res.status(401).json('ACCESO DENEGADO PRIMERO DEBES INICIAR SESION')}
    const token = req.headers.authorization.split(' ');
    if(token == 'null'){return res.status(401).json('ACCESO DENEGADO')}
    if(token[0]!='Bearer'){return res.status(401).json('ACCESO DENEGADO, ERROR CON TOKEN')}
    const toke=jwt.decode(token[1].toString(),'secretkey');
    req.verificacionID=toke._id;
    next();
}
module.exports=router;