const crearCita = async(NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,DOCTOR,FECHA_CITA,CALIFICACION)=>{
   await axios({
        method:'post',
        url:'http://localhost:3000/api/crear-cita',
        responseType: 'json',
        data:{

            NOMBRE_MASCOTA : NOMBRE_MASCOTA ,
            NOMBRE_DUENO : NOMBRE_DUENO,
            CEDULA : CEDULA,
            DIRECCION : DIRECCION,
            LATITUD : LATITUD,
            LONGITUD : LONGITUD,
            DOCTOR : DOCTOR,
            FECHA_CITA : FECHA_CITA, 
            CALIFICACION : CALIFICACION

        }
    }).then((res)=>{
        if(res.data.resultado == false){
                switch(res.data.error.code){
                case 11000:
                    Swal.fire({
                            title: 'Error al cargar el listado',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }
        }
        else{
             Swal.fire({
            title: 'Cita creada',
            text: 'Cita creada correctamente',
            icon: 'success'
            });   
        }
    }).
    catch((err)=>{
            console.log(err);
        });
}

const getCitaById = async(_id) =>{

    const params = new URLSearchParams([['_id', _id]]);
    let cita = axios.get('http://localhost:3000/api/obtener-cita-by-id',{params})
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
                return res.data.cita
            }


    });

    return cita;
}

const getCitaByCedula = async(_id) =>{

    const params = new URLSearchParams([['_id', _id]]);
    let citas = axios.get('http://localhost:3000/api/obtener-cita-by-cedula',{params})
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
                return res.data.citas
            }


    });

    return citas;
}



const actualizarCalificacionCita = async(_id,CALIFICACION)=>{

let result = await axios({
        method:'put',
        url:'http://localhost:3000/api/actualizar-calificacion-cita',
        responseType:'json',
        data:{
        _id: _id,
	    CALIFICACION : CALIFICACION ,
        }
    }).
    then((res)=>{
        if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al actulizar calificacion',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }

       }
        else{
            return res.data
       }

    })
    
    return result
}

const getCitas = async() =>{

    const listado =  await axios.get('http://localhost:3000/api/obtener-citas')
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

const actualizarCita = async(_id,NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,DOCTOR,FECHA_CITA,CALIFICACION) => {
    await axios({
        method: 'put',
        url:'http://localhost:3000/api/actualizar-cita',
        responseType:'json',
        data:{

            _id:_id,
            NOMBRE_MASCOTA : NOMBRE_MASCOTA ,
            NOMBRE_DUENO : NOMBRE_DUENO,
            CEDULA : CEDULA,
            DIRECCION : DIRECCION,
            LATITUD : LATITUD,
            LONGITUD : LONGITUD,
            DOCTOR : DOCTOR,
            FECHA_CITA : FECHA_CITA, 
            CALIFICACION : CALIFICACION

        }
    })
    .then((res)=>{
        if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al actualozar cita',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }

       }
       else{
            Swal.fire({
            title: 'Cita Actualizado',
            text: 'Cita actuailizado correctamente',
            icon: 'success'
            });        
       }
    })
}


const borrarCita = async(_id) => {


 let params = new URLSearchParams([['_id', _id]]);
    let resp = axios.delete('http://localhost:3000/api/borrar-cita',{params})
            .then((res)=> {
            if(res.data.resultado == false){
                
                    switch(res.data.error.code){
                        case 11000:
                            Swal.fire({
                                    title: 'Error al borrar cita',
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