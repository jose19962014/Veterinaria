// inputs
let formNombreMascota = document.querySelector('#formNombreMascota');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formCedula = document.querySelector('#formCedula');
let formDireccion = document.querySelector('#formDireccion');
let formDoctor = document.querySelector('#formDoctor');
let formFechaIngreso = document.querySelector('#formFechaIngreso');
let formFechaSalida = document.querySelector('#formFechaSalida');
//botones
let butformActualizar = document.querySelector('#butFormActualizar');
let butFormCrear = document.querySelector('#butFormCrear');
let butFormCancel = document.querySelector('#butFormCancel');
//tabla
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
    const pattern = new RegExp('^[A-Z0-9]+$', 'i');
    
    return  pattern.test(texto);
}

function  validationJustNum(numero){
    const pattern = new RegExp('^[0-9]+$', 'i');
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
    }
}

function validacionCedula(){
    let numFormCedula =  formCedula.value;
    if(!validationJustNum(numFormCedula)){
        alerttexto('Numero de cedula solo admite numeros y no puede estar vacio')
        formCedula.style.borderColor = 'red';
        return;
    }
 
    else{
        formCedula.style.borderColor = 'palegreen';
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
    }
}

function validacionDoctor(){
  let textformDoctor = formDoctor.value;
  if(textformDoctor == "0"){
        alerttexto('El campo doctor es obligatorio')
        formDoctor.style.borderColor = 'red';
        return;
  }
  else{
    formDoctor.style.borderColor = 'palegreen';
  }
}

function validacionFechaEntrada(){
    let textformFechaIngreso = formFechaIngreso.value; 

    if(textformFechaIngreso != "" && textformFechaIngreso != null)
    {
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate()+15); 

        const dateSelecionado = new Date(textformFechaIngreso)
        if(dateSelecionado > maxDate){
            alerttexto('No se puede reservar con mas de 15 dias de anticipacion')
            formFechaIngreso.style.borderColor = 'red';
            return;
        }
        else{
            formFechaIngreso.style.borderColor = 'palegreen';
        }
    }
    else{
        alerttexto('La fecha de ingreso es obligatoria')
        formFechaIngreso.style.borderColor = 'red';
        return;        
    }
}

function validacionFechaSalida(){
    let textformFechaSalida = formFechaSalida.value; 

    if(textformFechaSalida != "" && textformFechaSalida != null)
    {

        formFechaSalida.style.borderColor = 'palegreen';
        
    }
    else{
        alerttexto('La fecha de salida es obligatoria')
        formFechaSalida.style.borderColor = 'red';
        return;        
    }
}

function validacionDeData (){
    validacionNombreMascota();
    validacionNombreDueno();
    validacionCedula();
    validacionDireccion();
    validacionFechaEntrada();
    validacionDoctor();
    validacionFechaSalida();
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
    validacionDeData();
})

butformActualizar.addEventListener("click",function(){
    limpiarForm();
    validacionDeData();
})

// botones de la tabla

butTableActualizar.addEventListener('click',getExpedineteById)