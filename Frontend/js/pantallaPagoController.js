// inputs
let formNumeroTarjeta = document.querySelector('#formNumeroTarjeta');
let formMesVencimiento = document.querySelector('#formMesVencimiento');
let formanoVencimiento = document.querySelector('#formAnoVencimiento');
let formCvv = document.querySelector('#formCvv');
let formNombre = document.querySelector('#formNombre');

//botones
let butFormCrear = document.querySelector('#butFormCrear');
let butFormCancel = document.querySelector('#butFormCancel');



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
    numero = numero.replaceAll(" ","");
    return  pattern.test(numero);

}

function  validationTipoTarjeta(texto){
    const   VISA = new RegExp("^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$");
    const   MASTERCARD = new RegExp("^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$");
    const   AMEX = new RegExp("^3[47][0-9-]{16}$");



    if(texto[0] == 4 && texto.length >= 14){
        return "VISA";
    }
    else if(texto[0] == 5 && texto.length >= 14){
        return "MASTERCARD";
    }
    else if(texto[0] == 3 && texto.length >=14){
        return "AMEX";
    }
    else{
        return "Numero de tarjeta no valido"
    }
}
function limpiarForm(){

    formNumeroTarjeta.value = '';
    formFechaVencimiento.value = '';
    formCvv.value = '';
    formNombre.value = '';
    formApellido.value = 0;
  
  
    formNumeroTarjeta.style.borderColor = 'white';
    formFechaVencimiento.style.borderColor = 'white';
    formCvv.style.borderColor = 'white';
    formNombre.style.borderColor = 'white';
    formApellido.style.borderColor = 'white';

    butFormCrear.disabled = false;
}


function validacionNumeroTarjeta(){
     let TextformNumeroTarjeta = formNumeroTarjeta.value;
    if(!validationJustNum(TextformNumeroTarjeta)){
        alerttexto('Numero de tarjeta solo admite numeros y no puede estar vacio')
        formNumeroTarjeta.style.borderColor = 'red';
       
        return;
    }
    else{
        let tipoTarjeta = validationTipoTarjeta(TextformNumeroTarjeta);
        if( tipoTarjeta != "Numero de tarjeta no valido"){

            formNumeroTarjeta.style.borderColor = 'palegreen';
            formNombre.value = tipoTarjeta;
        }
        else{
            alerttexto(tipoTarjeta)
            formNombre.value = tipoTarjeta;
        }
    }
}

function validacionMesVencimiento(){
    let textformMesVencimiento = formMesVencimiento.value;
    if(!validationJustNum(textformMesVencimiento ) || !(parseInt(textformMesVencimiento) >= 1  && parseInt(textformMesVencimiento)  <= 12)){
        alerttexto('Mes de vencimiento de tarjeta solo admite numeros, no puede estar vacio maximo y minimo 2 dijitos')
        formNombreDueño.style.borderColor = 'red';
        return;
    } 
    else{

        formMesVencimiento.style.borderColor = 'palegreen';
    }
}


function validacionAnoVencimiento(){
    let textformanoVencimiento = formanoVencimiento.value;
    if(!validationJustNum(textformanoVencimiento ) || !(parseInt(textformanoVencimiento) >= 2022  && parseInt(textformanoVencimiento)  <= 2031)){
        alerttexto('Ano de vencimiento de tarjeta solo admite numeros, no puede estar vacio maximo  y minimo 4 dijitos')
        formanoVencimiento.style.borderColor = 'red';
        return;
    } 
    else{

        formanoVencimiento.style.borderColor = 'palegreen';
    }
}


function validacionCVV(){
    let textformCvv= formCvv.value;
    if(!validationJustNum(textformCvv ) || !(parseInt(textformCvv) >= 1  && parseInt(textformCvv)  <= 9999)){
        alerttexto('Ano de vencimiento de tarjeta solo admite numeros, no puede estar vacio maximo  y minimo 4 dijitos')
        formCvv.style.borderColor = 'red';
        return;
    } 
    else{

        formCvv.style.borderColor = 'palegreen';
    }
}

function validacionDeData (){
    validacionNumeroTarjeta();
    validacionMesVencimiento();
    validacionAnoVencimiento();
    validacionCVV();

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
   document.location.href="/factura.html";
})





