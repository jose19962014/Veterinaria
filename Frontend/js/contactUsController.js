// inputs
let formnombre = document.querySelector('#formnombre');
let formapellidos = document.querySelector('#formapellidos');
let formtelefono = document.querySelector('#formtelefono');
let formemail = document.querySelector('#formemail');

//botones
let btnregistrar = document.querySelector('#btnregistrar');



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

function  validationJusttelefono(numero){
    const pattern = /(\d{4}\d{1,4})+$/g;
     return pattern.test(numero);;
 }

	
function validationJustemail( email ){
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    return expression.test(String(email).toLowerCase())
}
function limpiarForm(){
    nombre.value = '';
    apellidos.value = '';
    cedula.value = '';
    direccion.value = '';
    telefono.value = '';
    password.value = '';
    email.value = '';
  
  
    nombre.style.borderColor = 'white';
    apellidos.style.borderColor = 'white';
    cedula.style.borderColor = 'white';
    direccion.style.borderColor = 'white';
    telefono.style.borderColor = 'white';
    password.style.borderColor = 'white';

}


function validacionformnombre(){
     let textformnombre = formnombre.value;
    if(!validationJustTextNum(textformnombre)){
        alerttexto('Nombre solo admite letras y no puede estar vacio')
        formnombre.style.borderColor = 'red';
        return;
    }
    else{
        formnombre.style.borderColor = 'palegreen';
        return true;
    }
}

function validacionformapellidos(){
    let textformapellidos = formapellidos.value;
    if(!validationJustTextNum(textformapellidos)){
        alerttexto('Apellidos admite letras y no puede estar vacio')
        formapellidos.style.borderColor = 'red';
        return;
    } 
    else{
        formapellidos.style.borderColor = 'palegreen';
        return true;
    }

}


function validacionformtelefono(){
    let numformtelefono = formtelefono.value;
    if(!validationJusttelefono(numformtelefono)){
        alerttexto('Numero de tel??fono solo admite numeros y no puede estar vacio')
        formtelefono.style.borderColor = 'red';
        return;
  }
    else{
    telefono.style.borderColor = 'palegreen';
    return true;
  }

}

function validacionformemail(){
    let textformemail =  formemail.value;
    if(!validationJustemail(textformemail)){
        alerttexto('El correo electr??nico debe de ingresarlo por completo')
        formemail.style.borderColor = 'red';
        return;
    }   
 
    else{
        direccion.style.borderColor = 'palegreen';
        return true;
    }

    
}


function validacionDeData (){
    validacionformnombre();
    validacionformapellidos();
    validacionformcedula();
    validacionformtelefono();
    validacionformdireccion();
    validacionformemail();
    validacionformpassword();
    
    if(validacionformnombre()){
        if(validacionformapellidos()){
            if(validacionformcedula()){
                if(validacionformdireccion()){
                    if(validacionformemail()){
                        if(validacionformpassword()){
                        return true
                        }else{return false;}
                    }else{return false;}
                }else{return false;}
            }else{return false;}
        }else{return false;}
     }else{return false;}
   
}



btnregistrar.addEventListener("click",function(){

    if(validacionDeData()){

        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })
            
            limpiarForm();
    }
})


///funciones de la tabla
function getExpedineteById(index){
    butFormCrear.disabled = true;
}