const Express = require('express');
const Expediente = require('../modelos/Expendiente');
const router = Express.Router();

router.delete('/borrar-expediente',(req,res)=>{

    let _id =    req.query._id;
    Expediente.deleteOne({_id:_id},function(error,info){
         if(error){
            res.status(500).json({
                resultado:false,
                msj: "no se pudo borrar el expediente",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:"Expediente borrado exitosamente",
                info
            });
        }
    });
});

router.put('/actualizar-expediente',(req,res)=>{

    let body = req.body;

    Expediente.updateOne({_id:body._id},{$set:body},function(error,info){
        if(error){
                res.status(500).json({
                resultado:false,    
                msj:"Error al actualizar expediente",
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
    });

});

router.put('/borrrar-padecimientos-expediente',(req,res)=>{

    let body = req.body;
    let error;
    let padecimientos = body.padecimientos;
   // let padecimientos = JSON.parse(body.padecimientos);
    padecimientos.forEach(padecimiento => {

        Expediente.updateOne({_id:body._id},{
            $pull:{
                "PADECIMIENTOS": {_id:padecimiento}
            }
        },
        (error) => {
                if (error) {
                    error = error;
                }
            }
        )

    });


     if (error) {
        return res.json({
            resultado: false,
            msj: "No se pudo borrar padecimiento ocurrió el siguiente error: ",
            error
        })
    } else {
        return res.json({
            resultado: true,
            msj: "padecimiento borrado",

        })
    }

    
});

router.put('/actualizar-padecimientos-expediente',(req,res)=>{

    let body = req.body;
    let error;

    let padecimientos =body.padecimientos;
    //let padecimientos = JSON.parse(body.padecimientos);

    padecimientos.forEach(padecimiento => {
        Expediente.updateOne({ _id: body._id }, {
                $push: {
                    "PADECIMIENTOS": {
                        PADECIMIENTO: padecimiento
                    }

                }
            },
            (error) => {
                if (error) {
                    error = error;
                }
            }
        )
    });
    if (error) {
        return res.json({
            resultado: false,
            msj: "No se pudo agregarel padecimiento ocurrió el siguiente error: ",
            error
        })
    } else {
        return res.json({
            resultado: true,
            msj: "padecimiento agregado",

        })
    }

});

router.get('/buscar-expediente-id',(req,res)=>{
    let _id = req.query._id;

    Expediente.find({_id: _id},
        (error,expedienteDB)=>{
        if(error){
            res.status(500).json({
                resultado:false,    
                msj:"Error al buscar expediente",
                error

            });
        }
        else{
            res.status(200).json({
                resultado:true,    
                msj:"Listado Exitoso",
                expediente: expedienteDB
            });
        }
    });

});

router.get("/listar-expediente",(req,res)=>{
    Expediente.find((error,listado)=>{
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

});


router.post('/registrar-expediente',(req,res)=>{
    let body = req.body;
    let nuevoExpediente = new Expediente({
        NOMBRE_MASCOTA : body.NOMBRE_MASCOTA,
        NOMBRE_DUENO : body.NOMBRE_DUENO,
        CEDULA : body.CEDULA,
        DIRECCION : body.DIRECCION,
        LATITUD : body.LATITUD,
        LONGITUD : body.LONGITUD,
        OBSERVACIONES : body.OBSERVACIONES,
        FOTO : body.FOTO
    });
    nuevoExpediente.save((error,personaDB)=>{
        if(error){
            res.status(500).json({
                resultado:false,
                msj: "No se pudo hacer el registro",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj: "Registro Exitoso",
                personaDB
            });
        }
    })
});


module.exports = router;