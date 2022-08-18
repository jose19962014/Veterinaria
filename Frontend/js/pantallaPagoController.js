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
    const pattern = /^[A-Z0-9\s]+$/gi;
    return  pattern.test(texto);
}



function  validationJustNum(numero){
    const pattern = new RegExp('^[0-9]+$', 'i');
    return  pattern.test(numero);

}


function  validationTipoTarjeta(texto){
    const   VISA = /^4[47][0-9]{13}$/;
    const   MASTERCARD = /5[1-5][0-9]{14}$/;
    const   AMEX = /^3[47][0-9]{13}$/;

    if(VISA.test(texto)){
        return "VISA";
    }
    else if(MASTERCARD.test(texto)){
        return "MASTERCARD";
    }
    else if(AMEX.test(texto)){
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
            return true;
        }
        else{
            alerttexto(tipoTarjeta)
            formNombre.value = tipoTarjeta;
        }
    }
}

function validacionMesVencimiento(){
    let textformMesVencimiento = formMesVencimiento.value;
    if(textformMesVencimiento.length == 2 ){
        if((!validationJustNum(textformMesVencimiento ) || !(parseInt(textformMesVencimiento) >= 1  && parseInt(textformMesVencimiento)  <= 12) )){
        
            alerttexto('Mes de vencimiento de tarjeta solo admite numeros de 01 a 12')
            formMesVencimiento.style.borderColor = 'red';
            return;
        } 
        else{

            formMesVencimiento.style.borderColor = 'palegreen';
            return true;
        }

    }
    else{
        alerttexto('Mes de vencimiento de tarjeta tiene que tener maximo y minimo 2 dijitos ej 01')
        formMesVencimiento.style.borderColor = 'red';
        return;
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
        return true;
    }
}


function validacionCVV(){
    let textformCvv= formCvv.value;
    if(!validationJustNum(textformCvv ) || !(parseInt(textformCvv) >= 0  && parseInt(textformCvv)  <= 9999)){
        alerttexto('Ano de vencimiento de tarjeta solo admite numeros, no puede estar vacio maximo  y minimo 4 dijitos')
        formCvv.style.borderColor = 'red';
        return;
    } 
    else{

        formCvv.style.borderColor = 'palegreen';
        return true;
    }
}

function validacionDeData (){


        if(validacionNumeroTarjeta()){
        if(validacionMesVencimiento()){
            if(validacionAnoVencimiento()){
                if(validacionCVV()){
                    return true;
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
     document.location.href="/Frontend/factura.html";
    }
   
})





