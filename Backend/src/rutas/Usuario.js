const { Router } = require('express');
const Express = require('express');
const Usuario = require('../modelos/Usuario');
const router = Express.Router();


router.post('/crear-usuario',(req,res)=>{

    let body = req.body;
    let nuevoUsuario = new Usuario({
        NOMBRE_USARIO : body.NOMBRE_USARIO,
        CEDULA : body.CEDULA,
        DIRECCION : body.DIRECCION,
        LATITUD : body.LATITUD,
        LONGITUD : body.LONGITUD,
        ROL : body.ROL,
        CONTRASENA: body.CONTRASENA,
        CORREO:body.CORREO
    });

    nuevoUsuario.save((error,UsuarioDB)=>{
        if(error){
            res.status(500).json({
                resultado:false,
                msj:"No se pudo crear usuario",
                error
            });
        }
        else{
            res.status(200).json({
                resultado:true,
                msj:'Usuario creado exitosamente',
                UsuarioDB
            });
        }
    });

})


router.get('/obtener-usuario-by-loggin',(req,res)=>{
   let CORREO = req.query.CORREO;
   let CONTRASENA = req.query.CONTRASENA;
    Usuario.find({CORREO:CORREO,CONTRASENA:CONTRASENA},
        (error,usuario)=>{
            if(error){
                res.status(500).json({
                    resultado:false,
                    msj:"error al obtner usuario",
                    error
                })
            }
            else{
                res.status(200).json({
                    resultado:true,
                    msj:"Usuario encontrado",
                    usuario
                })
            }
        })
})

module.exports = router;