           
const crearReservacion = async (NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,FECHA_ENTRADA,FECHA_SALIDA,CALIFICACION)=>{
    await axios({
        method:'post',
        url:'http://localhost:3000/api/crear-reservacion',
        responseType:'json',
        data:{
            NOMBRE_MASCOTA:NOMBRE_MASCOTA,
            NOMBRE_DUENO:NOMBRE_DUENO,
            CEDULA:CEDULA,
            DIRECCION:DIRECCION,
            LATITUD:LATITUD,
            LONGITUD:LONGITUD,
            FECHA_ENTRADA:FECHA_ENTRADA,
            FECHA_SALIDA:FECHA_SALIDA,
            CALIFICACION:CALIFICACION
        }
    }).then((res)=>{
            if(res.data.resultado == false){
                    switch(res.data.error.code){
                    case 11000:
                        Swal.fire({
                                title: 'Error al crear el reservacion',
                                text: 'error intente de nuevo',
                                icon: 'warning'
                                });
                                break;
                }
            }
            else{
                Swal.fire({
                title: 'Reservcion creada',
                text: 'Reservcion creada correctamente',
                icon: 'success'
                });   
            }
        }).
        catch((err)=>{
                console.log(err);
            });
}


const obtenerReservaciones = async()=>{

 const listado =  await axios.get('http://localhost:3000/api/obtener-reservaciones')
    .then((res)=> {
       if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al cargar el listado',
                            text: texto,
                            icon: 'warning'
                            });
                            break;
            }

       }
       else{
           return res.data.listado;
       }
    })

    return listado;
}


const borrarReservacion = async(_id)=>{

    let params = new URLSearchParams([['_id', _id]]);
    let resp = axios.delete('http://localhost:3000/api/borrar-reservacion',{params})
            .then((res)=> {
            if(res.data.resultado == false){
                
                    switch(res.data.error.code){
                        case 11000:
                            Swal.fire({
                                    title: 'Error al borrar reservacion',
                                    text: texto,
                                    icon: 'warning'
                                    });
                                    break;
                    }

            }
            else{
                
                return res.data;
                    
            }
            });
     return resp;

}



const getReservacionById = async(_id) =>{

    const params = new URLSearchParams([['_id', _id]]);
    let reservacion = axios.get('http://localhost:3000/api/obtener-reservacion-by-id',{params})
    .then((res)=>{
            if(res.data.respuesta ==false){
                switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al cargar el expediente',
                            text: texto,
                            icon: 'warning'
                            });
                            break;
                 }
            }
            else{
                return res.data.reservacion
            }


    });

    return reservacion;
}



const actualizarReservacion = async(_id,NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,FECHA_ENTRADA,FECHA_SALIDA,CALIFICACION) => {
    await axios({
        method: 'put',
        url:'http://localhost:3000/api/actualizar-reservacion',
        responseType:'json',
        data:{

            _id:_id,
            NOMBRE_MASCOTA:NOMBRE_MASCOTA,
            NOMBRE_DUENO:NOMBRE_DUENO,
            CEDULA:CEDULA,
            DIRECCION:DIRECCION,
            LATITUD:LATITUD,
            LONGITUD:LONGITUD,
            FECHA_ENTRADA:FECHA_ENTRADA,
            FECHA_SALIDA:FECHA_SALIDA,
            CALIFICACION:CALIFICACION

        }
    })
    .then((res)=>{
        if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al actualozar Reservacion',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }

       }
       else{
            Swal.fire({
            title: 'Reservacion Actualizado',
            text: 'Reservacion actuailizado correctamente',
            icon: 'success'
            });        
       }
    })
}