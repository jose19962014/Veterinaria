const { Router } = require('express');
const Express = require('express');
const Cita = require('../modelos/Cita');
const router = Express.Router();




router.post('/crear-cita',(req,res)=>{

    let body = req.body;
    let nuevaCita = new Cita({
        NOMBRE_MASCOTA : body.NOMBRE_MASCOTA,
        NOMBRE_DUENO : body.NOMBRE_DUENO,
        CEDULA : body.CEDULA,
        DIRECCION : body.DIRECCION,
        LATITUD : body.LATITUD,
        LONGITUD : body.LONGITUD,
        DOCTOR : body.DOCTOR,
        FECHA_CITA : body.FECHA_CITA,
        CALIFICACION : body.CALIFICACION
    });

    nuevaCita.save((error,citaDB)=>{
        if(error){
            res.status(500).json({
                resultado:false,
                msj:"No se pudo crear cita",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:'Cita creada exitosamente',
                citaDB
            });
        }
    });

})

router.get('/obtener-cita-by-id',(req,res)=>{
   let _id = req.query._id;
    Cita.find({_id:_id},
        (error,cita)=>{
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
                    cita
                })
            }
        })
})


router.get('/obtener-cita-by-cedula',(req,res)=>{
   let _id = req.query._id;
    Cita.find({CEDULA:_id},
        (error,citas)=>{
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
                    citas
                })
            }
        })
})


router.get('/obtener-cita-by-cedula-and-mascota',(req,res)=>{
   let CEDULA = req.query.CEDULA;
   let NOMBRE_MASCOTA = req.query.NOMBRE_MASCOTA;
    Cita.find({CEDULA:CEDULA,NOMBRE_MASCOTA:NOMBRE_MASCOTA},
        (error,citas)=>{
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
                    citas
                })
            }
        })
})

router.get('/obtener-citas',(req,res)=>{
    Cita.find((error,listado)=>{
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

router.put('/actualizar-cita',(req,res)=>{

    let body = req.body;

    Cita.updateOne({_id:body._id},{$set:body},(error,info)=>{ 

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


router.put('/actualizar-citas-by-cedula-mascota',(req,res)=>{

    let body = req.body;
    let error;


    Cita.updateMany({CEDULA:body.CEDULA,NOMBRE_MASCOTA:body.NOMBRE_MASCOTA},{

        NOMBRE_MASCOTA:body.new_NOMBRE_MASCOTA,
        NOMBRE_DUENO:body.new_NOMBRE_DUENO,
        CEDULA:body.new_CEDULA,
        DIRECCION:body.new_DIRECCION,
        LATITUD:body.new_LATITUD,
        LONGITUD:body.new_LONGITUD

    },(error,info)=>{ 

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
                msj:"Actualizacion exitosa exitosamente",
                info 
             });
                 
        }
   
    })

});

router.put('/actualizar-calificacion-cita',(req,res)=>{

    let body = req.body;
    let error;


    Cita.updateOne({_id:body._id},{CALIFICACION:body.CALIFICACION},(error,info)=>{ 

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
                msj:"Calificacion dada exitosamente",
                info 
             });    
        }
   
    })

});

router.delete('/borrar-cita',(req,res)=>{

    let _id =    req.query._id;
    Cita.deleteOne({_id:_id},function(error,info){
         if(error){
            res.status(500).json({
                resultado:false,
                msj: "no se pudo borrar la cita",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:"cita borrada exitosamente",
                info
            });
        }
    });


})

module.exports = router;