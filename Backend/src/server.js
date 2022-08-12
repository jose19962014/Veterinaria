const Express =  require('express');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const morgan = require('morgan');
//rutas
const Expediente = require('./rutas/Expediente');
const Cita = require('./rutas/Cita');
const Reservacion = require('./rutas/Reservacion');

// config de env
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});  


const app = Express();
app.use(morgan('dev'));
app._router.use(cors());
app.use(Express.json());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));
app.set('port',3000);


//coneccion con la db
mongoose.connect(process.env.MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},

function(error,dababase){
    if(error){
        console.log(error);
        process.exit(1);
    }
    else{
        let db = dababase;
        console.log("Conectados a MONGODB");
    }
}

);



app.use("/api",Expediente);
app.use('/api',Cita);
app.use('/api',Reservacion)



app.listen(app.get('port'),()=>{
  console.log(`Server running at http://${app.get('port')}/`);
})