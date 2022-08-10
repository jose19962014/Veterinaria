
let formObservaciones = document.querySelector('#formObservaciones');
let formDireccion = document.querySelector('#formDireccion');
let formCedula = document.querySelector('#formCedula');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formNombreMascota = document.querySelector('#formNombreMascota');

let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');
let formcontendorImagen = document.querySelector('#contendorImagen');

//botones
let butformActualizar = document.querySelector('#butFormActualizar');
let formbutFormCancel = document.querySelector("#butFormCancel");



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
    formDoctor.value = 0;
    formFechaIngreso.value = "";
    formFechaSalida.value = "";
  
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formDoctor.style.borderColor = 'white';
    formFechaIngreso.style.borderColor = 'white';
    formFechaSalida.style.borderColor = 'white';

    butFormCrear.disabled = false;
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
     if( !validationJustCedula(numFormCedula)){

        alerttexto('Numero de cedula solo admite numeros, no puede estar vacio y cantidad de digitos tiene que ser 9')
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


butformActualizar.addEventListener("click",function(){

    let _id =   window.localStorage.getItem("idExpediente");
   
    if(validacionDeData()){
       actualizarExpediente(
            _id,
            formNombreMascota.value,
            formNombreDueño.value,
            formCedula.value ,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value ,
            formcontendorImagen.src

        );
        
    }

});

formbutFormCancel.addEventListener('click',function(){
    window.location.href="/clienteMascota.html";
});


addEventListener('DOMContentLoaded', (event) => {
    formObservaciones.value = "sobre peso \n uñas largas";
    formDireccion.value = "San jose Tibas";
    formCedula.value = "5-0767-0898"; 
    formNombreDueño.value = "Jose"; 
    formNombreMascota.value = "Santi"; 
});