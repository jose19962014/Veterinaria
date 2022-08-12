const Express = require('express');
const router = Express.Router();
const Reservacion = require('../modelos/Reservaciones');



router.post('/crear-reservacion',(req,res)=>{

    let body = req.body;

    let newReservacion = new Reservacion({

        NOMBRE_MASCOTA:body.NOMBRE_MASCOTA,
        NOMBRE_DUENO:body.NOMBRE_DUENO,
        CEDULA:body.CEDULA,
        DIRECCION:body.DIRECCION,
        LATITUD:body.LATITUD,
        LONGITUD:body.LONGITUD,
        FECHA_ENTRADA:body.FECHA_ENTRADA,
        FECHA_SALIDA:body.FECHA_SALIDA,
        CALIFICACION:body.CALIFICACION
    })

    newReservacion.save((error,reservacionDB)=>{
        if(error){
            res.status(500).json({
                resultado:false,
                msj:"No se pudo crear reservacion",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:'reservacion creada exitosamente',
                reservacionDB
            });
        }
    });

})



router.put('/actualizar-reservacion',(req,res)=>{

    let body = req.body;

    Reservacion.updateOne({_id:body._id},{$set:body},(error,info)=>{ 

        if(error){
                res.status(500).json({
                resultado:false,    
                msj:"Error al actualizar cita",
                error

            });            
        }
        else{
                res.status(200).json({
                resultado:true,    
                msj:"Actulizacion exitosa",
                info 
             });    
        }
   
    })
})



router.delete('/borrar-reservacion',(req,res)=>{

    let _id =    req.query._id;
    Reservacion.deleteOne({_id:_id},function(error,info){
         if(error){
            res.status(500).json({
                resultado:false,
                msj: "no se pudo borrar la Reservacion",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:"Reservacion borrada exitosamente",
                info
            });
        }
    });


})



router.get('/obtener-reservaciones',(req,res)=>{
    Reservacion.find((error,listado)=>{
        if(error){
            res.status(500).json({
                resultado:false,    
                msj:"Error al listar",
                error

            });
        }
        else{
            res.status(200).json({
                resultado:true,    
                msj:"Listado Exitoso",
                listado
            });
        }
    });
})


router.get('/obtener-reservacion-by-id',(req,res)=>{
   let _id = req.query._id;
    Reservacion.find({_id:_id},
        (error,reservacion)=>{
            if(error){
                res.status(500).json({
                    resultado:false,
                    msj:"error al obtner cita",
                    error
                })
            }
            else{
                res.status(200).json({
                    resultado:true,
                    msj:"consulta por id exitosa",
                    reservacion
                })
            }
        })
})


module.exports = router;