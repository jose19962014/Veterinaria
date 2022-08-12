// inputs
let formNombreMascota = document.querySelector('#formNombreMascota');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formCedula = document.querySelector('#formCedula');
let formDireccion = document.querySelector('#formDireccion');
let formDoctor = document.querySelector('#formDoctor');
let formFechaIngreso = document.querySelector('#formFechaIngreso');
let formFechaSalida = document.querySelector('#formFechaSalida');
let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');

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
    formFechaIngreso.value = "";
    formFechaSalida.value = "";
    formLatitud.value = "";
    formLongitud.value = "";
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
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
            return true;
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
        return true;
        
    }
    else{
        alerttexto('La fecha de salida es obligatoria')
        formFechaSalida.style.borderColor = 'red';
        return;        
    }
}

function validacionDeData (){



     if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                    if(validacionFechaEntrada()){
                            if(validacionFechaSalida()){
                                return true
                            }else{return false;}
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

        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
        title: 'El Moton a pagar?',
        text: "El moton a pgar son 75000 colones",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Continuar',
        cancelButtonText: 'No',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            crearReservacion(
                formNombreMascota.value ,
                formNombreDueño.value,
                formCedula.value,
                formDireccion.value,
                formLatitud.value,
                formLongitud.value,
                formFechaIngreso.value,
                formFechaSalida.value,
                0
                )

            window.location.href = "/Frontend/pantallaPago.html"
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            
            limpiarForm();
        }
        })

    }
})









window.addEventListener('load',(event)=>{

   validacionPermisos();  
   limpiarForm();

})

