
let formObservaciones = document.querySelector('#formObservaciones');
let formDireccion = document.querySelector('#formDireccion');
let formCedula = document.querySelector('#formCedula');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formNombreMascota = document.querySelector('#formNombreMascota');
let formPadecimientos = document.querySelector('#formPadecimientos');

let butformActualizar = document.querySelector('#butFormActualizar');
let butFormCrear = document.querySelector('#butFormCrear');
let butFormCancel = document.querySelector('#butFormCancel');

let tableRecord =  document.querySelector('#tableRecord');
let butTableActualizar = document.querySelector('#butTableActualizar');
let butTableBorrar = document.querySelector('#butTableBorrar');




//funciones del form

function limpiarForm(){
    formNombreMascota.value = '';
    formNombreDueño.value = '';
    formCedula.value = '';
    formObservaciones.value = '';
    formDireccion.value = '';
    formPadecimientos.value = 0; 
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formObservaciones.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formPadecimientos.style.borderColor = 'white';

    butFormCrear.disabled = false;
}

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
   const pattern = /(\d{1}-\d{1,4}-\d{1,4})+$/g;
    return pattern.test(numero);;
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

function validacionObservacion(){
   let textformObservaciones =  formObservaciones.value;
    if(!validationJustTextNum(textformObservaciones)){
        alerttexto('La observacion solo admite numeros y texto y no puede estar vacio')
        formObservaciones.style.borderColor = 'red';
        return;
    }    
 
    else{
        formObservaciones.style.borderColor = 'palegreen';
         return true;
    }
}

function validacionDeData (){

    if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                    if(validacionObservacion()){
                        return true
                    }else{return false;}
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
butFormCancel.addEventListener('click',function(){
    limpiarForm();
})

butFormCrear.addEventListener("click",function(){
    if(validacionDeData()){
      window.location.href = "/index.html";
    }
})


butformActualizar.addEventListener("click",function(){
    limpiarForm();
    validacionDeData();
  
})

// botones de la tabla

butTableActualizar.addEventListener('click',getExpedineteById)



