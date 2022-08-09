const getExpedientes = async()=>{

   const listado =  await axios.get('http://localhost:3000/api/listar')
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


const getExpedientesById = async(_id)=>{
    const params = new URLSearchParams([['_id', _id]]);
    const expediente =  await axios.get('http://localhost:3000/api/buscar-Expediente-id',{params})
    .then((res)=> {
       if(res.data.resultado == false){
        
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
           return res.data.expediente;
       }
    })

    return expediente;
}

        
const actualizarExpediente = async(_id,NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,OBSERVACIONES,FOTO)=>{
    await axios({
        method:'put',
        url:'http://localhost:3000/api/actualizar-expediente',
        responseType:'json',
        data:{
        _id: _id,
	    NOMBRE_MASCOTA : NOMBRE_MASCOTA ,
        NOMBRE_DUENO : NOMBRE_DUENO,
        CEDULA : CEDULA,
        DIRECCION : DIRECCION,
        LATITUD : LATITUD,
        LONGITUD : LONGITUD,
        OBSERVACIONES : OBSERVACIONES,
        FOTO : FOTO 
        }
    }).
    then((res)=>{
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
            title: 'Expediente Actualizado',
            text: 'Expediente actuailizado correctamente',
            icon: 'success'
            });        
       }
    })
}

const borrarExpedientePadecimientos = async(_id,arraypadecimientos)=>{
    await axios({
        method:'put',
        url: 'http://localhost:3000/api/borrrar-padecimientos-expediente',
        responseType: 'json',
        data: {
            _id: _id,
	        padecimientos : arraypadecimientos ,
        }
    }).
    then((res)=>{
        if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al actulizar padecimientos',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }

       }
        else{
            Swal.fire({
            title: 'Expediente Actualizado',
            text: 'Padecimientos actuailizados correctamente',
            icon: 'success'
            });        
       }

    })
}

const actualizarExpedientePadecimientos = async(_id,arraypadecimientos)=>{

 await axios({
        method:'put',
        url:'http://localhost:3000/api/actualizar-padecimientos-expediente',
        responseType:'json',
        data:{
        _id: _id,
	    padecimientos : arraypadecimientos ,
        }
    }).
    then((res)=>{
        if(res.data.resultado == false){
        
            switch(res.data.error.code){
                case 11000:
                     Swal.fire({
                            title: 'Error al actulizar padecimientos',
                            text: 'error intente de nuevo',
                            icon: 'warning'
                            });
                            break;
            }

       }
        else{
            Swal.fire({
            title: 'Expediente Actualizado',
            text: 'Padecimientos actuailizados correctamente',
            icon: 'success'
            });        
       }

    })
    
}


const crearExpediente = async(NOMBRE_MASCOTA,NOMBRE_DUENO,CEDULA,DIRECCION,LATITUD,LONGITUD,OBSERVACIONES,FOTO)=>{

  let resp = await axios({
                        method:'post',
                        url: 'http://localhost:3000/api/registrar',
                        responseType: 'json',
                        data:{
                            NOMBRE_MASCOTA : NOMBRE_MASCOTA ,
                            NOMBRE_DUENO : NOMBRE_DUENO,
                            CEDULA : CEDULA,
                            DIRECCION : DIRECCION,
                            LATITUD : LATITUD,
                            LONGITUD : LONGITUD,
                            OBSERVACIONES : OBSERVACIONES,
                            FOTO : FOTO 
                        }
                    }).
                    then((res)=>{
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
                            return res.data; 
                    }
                    }).
                    catch((err)=>{
                        console.log(err);
                    });

      return resp;              

}



const borrarExpediente = async(_id)=>{
    let params = new URLSearchParams([['_id', _id]]);
    let resp = axios.delete('http://localhost:3000/api/borrar-expediente',{params})
            .then((res)=> {
            if(res.data.resultado == false){
                
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
                
                return res.data;
                    
            }
            });
    return resp;
         

}