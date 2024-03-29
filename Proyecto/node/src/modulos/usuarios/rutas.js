const express = require ('express');
const seguridad = require ('./seguridad');
//const { eliminar } = require('../../DB/mysql');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

router.get('/',todos);
router.get('/:id',uno);
router.post('/', agregar);
router.put('/',seguridad(), eliminar);


  async function todos (req, res){
  try{
      const items = await controlador.todos();
      respuesta.success(req,res,items,200);
     } catch(err){
      respuesta.error(req, res, err, 500);  
    }
 };

 async function uno (req, res){
  try{
      const items = await controlador.uno(req.params.id);
      respuesta.success(req,res,items,200);
     } catch(err){
      respuesta.error(req, res, err, 500);  
    }
 };

 async function agregar (req, res, next){
  try{
      const items = await controlador.agregar(req.body);
      if(req.body.id == 0){
        mensaje = 'Item guardado con exito';
      }else {
        mensaje = 'Item actualizado con exito';
      }
      respuesta.success(req,res,mensaje,201);
     } catch(err){
      next(err);
    }
 };

 async function eliminar (req, res, next){
  try{
      const items = await controlador.eliminar(req.body);
      respuesta.success(req,res,'Registro eliminado satisfactoriamente!',200);
     } catch(err){
      next(err);
    }
 };

 module.exports = router;   