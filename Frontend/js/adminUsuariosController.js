// inputs
let formNombre = document.querySelector('#formNombre');
let formCedula = document.querySelector('#formCedula');
let formDireccion = document.querySelector('#formDireccion');
let formEstado = document.querySelector('#formEstado');
let formRol = document.querySelector('#formRol');
let formContrasena = document.querySelector('#formContrasena');
//botones
let butformActualizar = document.querySelector('#butFormActualizar');
let butFormCrear = document.querySelector('#butFormCrear');
//tabla
let tableRecord =  document.querySelector('#tableRecord');
let butTableActualizar = document.querySelector('#butTableActualizar');


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
    formNombre.value = '';
    formCedula.value = '';
    formDireccion.value = '';
    formEstado.value = '';
    formRol.value = "";
    formContrasena.value = "";
  
  

    formNombre.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formEstado.style.borderColor = 'white';
    formRol.style.borderColor = 'white';
    formContrasena.style.borderColor = 'white';

    butFormCrear.disabled = false;
}


function validacionNombre(){
    let textformNombre = formNombre.value;
    if(!validationJustTextNum(textformNombre)){
        alerttexto('Nombre solo admite letras y no puede estar vacio')
        formNombre.style.borderColor = 'red';
        return;
    } 
    else{
        formNombre.style.borderColor = 'palegreen';
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

function validacioEstado(){
  let textformEstado = formEstado.value;
  if(textformEstado == "0"){
        alerttexto('El campo es obligatorio')
        formEstado.style.borderColor = 'red';
        return;
  }
  else{
    formEstado.style.borderColor = 'palegreen';
  }
}

function validacionRol(){
    let textformRol = formRol.value; 

    if(textformRol != "" && textformRol != null)
    {
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate()+15); 

        const dateSelecionado = new Date(textformRol)
        if(dateSelecionado > maxDate){
            alerttexto('El campo es obligatorio')
            formFechaIngreso.style.borderColor = 'red';
            return;
        }
        else{
            formRol.style.borderColor = 'palegreen';
        }
    }
    else{
        alerttexto('El campo es obligatorio')
        formRol.style.borderColor = 'red';
        return;        
    }
}

function validacionContrasena(){
    let textformContrasena = formContrasena.value; 

    if(textformContrasena != "" && textformContrasena != null)
    {

        formContrasena.style.borderColor = 'palegreen';
        
    }
    else{
        alerttexto('La Contrasena es obligatoria')
        formContrasena.style.borderColor = 'red';
        return;        
    }
}

function validacionDeData (){
    validacionNombre();
    validacionCedula();
    validacionDireccion();
    validacionEstado();
    validacionRol();
    validacionContrasena();
}


///funciones de la tabla
function getExpedineteById(index){
    butFormCrear.disabled = true;
}



//botones del form
butFormCrear.addEventListener("click",function(){
    validacionDeData();
})

butformActualizar.addEventListener("click",function(){
    limpiarForm();
    validacionDeData();
})

butTableActualizar.addEventListener('click',getExpedineteById)