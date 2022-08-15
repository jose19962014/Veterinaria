const mongoose = require('mongoose');
const schema_Usuario = new mongoose.Schema({
    NOMBRE_USARIO:{type:String,required:true,unique:false},
    CEDULA:{type:String,required:true,unique:true},
    DIRECCION:{type:String,required:true,unique:false},
    LATITUD:{type:String,required:false,unique:false},
    LONGITUD:{type:String,required:false,unique:false},
    ROL:{type:String,required:true,unique:false},
    CONTRASENA:{type:String,required:true,unique:false},
    CORREO:{type:String,required:true,unique:true}
});
module.exports = mongoose.model('Usuario',schema_Usuario,'Usuarios');