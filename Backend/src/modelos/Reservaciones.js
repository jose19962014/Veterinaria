const mongoose = require('mongoose');
const schema_Reservaciones = new mongoose.Schema({
    NOMBRE_MASCOTA:{type:String,required:true,unique:false},
    NOMBRE_DUENO:{type:String,required:true,unique:false},
    CEDULA:{type:String,required:true,unique:false},
    DIRECCION:{type:String,required:true,unique:false},
    LATITUD:{type:String,required:false,unique:false},
    LONGITUD:{type:String,required:false,unique:false},
    FECHA_ENTRADA:{type:String,required:true,unique:false},
    FECHA_SALIDA:{type:String,required:true,unique:false},
    CALIFICACION:{type:Number,required:false,unique:false}
});
module.exports = mongoose.model('Reservacion',schema_Reservaciones,'Reservaciones');