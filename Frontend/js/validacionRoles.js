function validacionPermisos(){
    window.localStorage.setItem('rol','cliente');
    let rol = window.localStorage.getItem('rol');

    let urlusuarios  = document.querySelector('#urlusuarios');
    let urlmascotas  = document.querySelector('#urlmascotas');
    let urlpadecimientos  = document.querySelector('#urlpadecimientos');
    let urlexpediente  = document.querySelector('#urlexpediente');
    let urlcitas  = document.querySelector('#urlcitas');
    let urlreservaciones  = document.querySelector('#urlreservaciones');
    let adminseccion  = document.querySelector('#adminseccion');


    switch(rol){
        case 'cliente':
                adminseccion.remove();
            break;
        case 'doctor':
                urlpadecimientos.remove();
                urlusuarios.remove();
                urlmascotas.remove();
                urlpadecimientos.remove();
                urlexpediente.remove();
                urlcitas.remove();
                urlreservaciones.remove();
            break;            
         
    }
   
    
}