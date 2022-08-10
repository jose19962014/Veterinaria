let formNombreMascota = document.querySelector('#formNombreMascota');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formCedula = document.querySelector('#formCedula');
let formDireccion = document.querySelector('#formDireccion');
let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');
let butFormCrear = document.querySelector('#butFormCrear');
let formbutFormCancel = document.querySelector("#butFormCancel");
let formcontendorImagen = document.querySelector('#contendorImagen');




//funciones del form

function alerttexto(texto){
    Swal.fire({
        title: 'Formato de texto erroneo',
        text: texto,
        icon: 'warning'
        })
}


function  validationJustTextNum(texto){
    const pattern = /^[A-Z0-9\s]+$/gi;
    return  pattern.test(texto);
}
 
function  validationJustCedula(numero){
//   const pattern = /(\d{1}-\d{1,4}-\d{1,4})+$/g;
     const pattern = /(\d{1}-\d{4}-\d{4})+$/g;
    return  pattern.test(numero);
}

function limpiarForm(){
    formNombreMascota.value = '';
    formNombreDueño.value = '';
    formCedula.value = '';
    formDireccion.value = '';
    formLatitud.value = '';
    formLongitud.value = '';
    formcontendorImagen.src = '';
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formObservaciones.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formPadecimientos.style.borderColor = 'white';

}


function validacionNombreMascota(){
     let textformNombreMascota = formNombreMascota.value;
    if(!validationJustTextNum(textformNombreMascota)){
        alerttexto('Nombre de la mascota solo admite letras y no puede estar vacio')
        formNombreMascota.style.borderColor = 'red';
        return;
    }
    else{
        formNombreMascota.style.borderColor = 'palegreen';
         return true;
    }
}

function validacionNombreDueno(){
    let textformNombreDueño = formNombreDueño.value;
    if(!validationJustTextNum(textformNombreDueño)){
        alerttexto('Nombre del dueno solo admite letras y no puede estar vacio')
        formNombreDueño.style.borderColor = 'red';
        return;
    } 
    else{
        formNombreDueño.style.borderColor = 'palegreen';
         return true;
    }
}

function validacionCedula(){
    let numFormCedula =  formCedula.value;
    if(!validationJustCedula(numFormCedula)){
        alerttexto('Numero de cedula solo admite numeros y no puede estar vacio')
        formCedula.style.borderColor = 'red';
        return;
    }
 
    else{
        formCedula.style.borderColor = 'palegreen';
         return true;
    }
}


function validacionDireccion(){
    let textformDireccion =  formDireccion.value;
if(!validationJustTextNum(textformDireccion)){
        alerttexto('La direccion solo admite numeros y texto y no puede estar vacio')
        formDireccion.style.borderColor = 'red';
        return;
    }   
 
    else{
        formDireccion.style.borderColor = 'palegreen';
         return true;
    }
}



function validacionDeData (){


 if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                        return true
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}

        
}


///funciones de la tabla
function getExpedineteById(index){
    butFormCrear.disabled = true;
}


//botones del form

formbutFormCancel.addEventListener('click',function(){
    limpiarForm();
    window.location.href="/clienteMascota.html";
});


butFormCrear.addEventListener("click",function(){

    if(validacionDeData()){

        crearExpediente(
                    formNombreMascota.value,
                    formNombreDueño.value,
                    formCedula.value ,
                    formDireccion.value,
                    formLatitud.value,
                    formLongitud.value ,
                    formcontendorImagen.src

                ).
                then(expediente=>{
                        Swal.fire({
                        title: 'Registro exitoso',
                        text: expediente.msj,
                        icon: 'success'
                        });  

                });

        }

})





