const getUsuarioByLoggin = async(CORREO,CONTRASENA) =>{
    const params = new URLSearchParams([['CORREO', CORREO],['CONTRASENA',CONTRASENA]]);
    let citas = axios.get('http://localhost:3000/api//obtener-usuario-by-loggin',{params})
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
                return res.data.usuario
            }


    });

    return citas;
}