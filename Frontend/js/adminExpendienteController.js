
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

function alerttexto(texto){
    Swal.fire({
        title: 'Formato de texto erroneo',
        text: texto,
        icon: 'warning'
        })
}


function  validationJustTextNum(texto){
    // const pattern = new RegExp('([A-Za-z,0-9]{4,254})\w+');
    const pattern = new RegExp('^[A-Z0-9]+$', 'i');
    
    return  pattern.test(texto);
}

function  validationJustNum(numero){
    const pattern = new RegExp('^[0-9]+$', 'i');
    return  pattern.test(numero);
}

function validacionDeData (){
    let textformNombreMascota = formNombreMascota.value;
    let textformNombreDueño = formNombreDueño.value;
    let numFormCedula =  formCedula.value;
    let textformObservaciones =  formObservaciones.value;
    let textformDireccion =  formDireccion.value;

    if(!validationJustTextNum(textformNombreMascota)){
        alerttexto('Nombre de la mascota solo admite letras y no puede estar vacio')
        formNombreMascota.style.borderColor = 'red';
        return;
    }
    if(!validationJustTextNum(textformNombreDueño)){
        alerttexto('Nombre del dueno solo admite letras y no puede estar vacio')
        formNombreDueño.style.borderColor = 'red';
        return;
    } 
    if(!validationJustNum(numFormCedula)){
        alerttexto('Numero de cedula solo admite numeros y no puede estar vacio')
        formCedula.style.borderColor = 'red';
        return;
    }
    if(!validationJustTextNum(textformObservaciones)){
        alerttexto('La observacion solo admite numeros y texto y no puede estar vacio')
        formObservaciones.style.borderColor = 'red';
        return;
    }    
    if(!validationJustTextNum(textformDireccion)){
        alerttexto('La direccion solo admite numeros y texto y no puede estar vacio')
        formDireccion.style.borderColor = 'red';
        return;
    }    
        
}


///funciones de la tabla
function getExpedineteById(index){
    butFormCrear.disabled = true;
}



//botones del form

butFormCrear.addEventListener("click",function(){
    validacionDeData();
})

butFormCancel.addEventListener('click',function(){
    formNombreMascota.value = '';
    formNombreDueño.value = '';
    formCedula.value = '';
    formObservaciones.value = '';
    formDireccion.value = '';
    formPadecimientos.value = 0; 
  
    formNombreMascota.style.borderColor = 'none';
    formNombreDueño.style.borderColor = 'none';
    formCedula.style.borderColor = 'none';
    formObservaciones.style.borderColor = 'none';
    formDireccion.style.borderColor = 'none';
    formPadecimientos.style.borderColor = 'none';
})

// botones de la tabla

butTableActualizar.addEventListener('click',getExpedineteById)



