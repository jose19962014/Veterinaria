const mongoose = require('mongoose');
const schemaExpediente = new mongoose.Schema({
    NOMBRE_MASCOTA:{type:String,required:true,unique:false},
    NOMBRE_DUENO:{type:String,required:true,unique:false},
    CEDULA:{type:String,required:true,unique:false},
    DIRECCION:{type:String,required:true,unique:false},
    LATITUD:{type:String,required:false,unique:false},
    LONGITUD:{type:String,required:false,unique:false},
    OBSERVACIONES:{type:String,required:false,unique:false},
    PADECIMIENTOS:[
       { PADECIMIENTO:{type:String,required:false,unique:false} }
    ],
    FOTO:{type:String,required:false,unique:false}
});
module.exports = mongoose.model('Expediente',schemaExpediente,'Expedientes');