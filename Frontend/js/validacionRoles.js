function validacionPermisos(){
   // window.sessionStorage.setItem('rol','cliente');
    let rol = window.sessionStorage.getItem('ROL');

    let urlusuarios  = document.querySelector('#urlusuarios');
    let urlmascotas  = document.querySelector('#urlmascotas');
    let urlpadecimientos  = document.querySelector('#urlpadecimientos');
    let urlexpediente  = document.querySelector('#urlexpediente');
    let urlcitas  = document.querySelector('#urlcitas');
    let urlreservaciones  = document.querySelector('#urlreservaciones');
    let adminseccion  = document.querySelector('#adminseccion');
    let citaseccion  = document.querySelector('#citaseccion');
    let hotelseccion  = document.querySelector('#hotelseccion');




    switch(rol){
        case 'cliente':
                adminseccion?.remove();
            break;
        case 'doctor':
                urlpadecimientos?.remove();
                urlusuarios.remove();
                //urlexpediente?.remove();
                urlcitas.remove();
               // urlreservaciones.remove();
            break;
        case 'secretaria':
                urlpadecimientos?.remove();
                urlusuarios.remove();
                urlexpediente?.remove();
                //urlcitas.remove();
               // urlreservaciones.remove();
            break;  
        case 'admin':
            // nothing
            break;                         
        default:
            adminseccion?.remove();
            citaseccion?.remove()
            hotelseccion?.remove()
            

    }
   
    
}


window.addEventListener('load',(event)=>{
    validacionPermisos();
})