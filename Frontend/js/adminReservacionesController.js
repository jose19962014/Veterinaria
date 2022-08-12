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
let formSelectCalificacion = document.querySelector('#selectCalificacion');

//botones
let butformActualizar = document.querySelector('#butFormActualizar');
let butFormCrear = document.querySelector('#butFormCrear');
let butFormCancel = document.querySelector('#butFormCancel');
//tabla
let tableRecord =  document.querySelector('#tableRecord');
// let butTableActualizar = document.querySelector('#butTableActualizar');
// let butTableBorrar = document.querySelector('#butTableBorrar');



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
    formSelectCalificacion.value = 0;
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formFechaIngreso.style.borderColor = 'white';
    formFechaSalida.style.borderColor = 'white';



    window.localStorage.removeItem("idReservacion");
    butFormCrear.disabled = false;
    butformActualizar.disabled = true;
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

function validacionDoctor(){
  let textformDoctor = formDoctor.value;
  if(textformDoctor == "0"){
        alerttexto('El campo doctor es obligatorio')
        formDoctor.style.borderColor = 'red';
        return;
  }
  else{
    formDoctor.style.borderColor = 'palegreen';
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
                formSelectCalificacion.value)

            window.location.href = "/Frontend/pantallaPago.html"
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            
            limpiarForm();
        }
        })

    }
})

butformActualizar.addEventListener("click",function(){
    
    let _id =   window.localStorage.getItem("idReservacion");
   
    if(validacionDeData()){
       actualizarReservacion(
            _id,
            formNombreMascota.value ,
            formNombreDueño.value,
            formCedula.value,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value,
            formFechaIngreso.value,
            formFechaSalida.value,
            formSelectCalificacion.value
            );
        
    }



})

// botones de la tabla



function butborrarReservacion(but){
    Swal.fire({
        title: 'deseas borrar la reservacion?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

           let _id = but.parentNode.parentNode.id;
            borrarReservacion(_id).then((res)=>{
                Swal.fire({
                title: 'Reservacion borrada',
                text:  res.msj,
                icon: 'success'
                });  
                obtenerReservaciones()
                    .then((listado)=>{
                        pintarListadoReservaciones(listado)
                    });
            
        });
        } else if (result.isDenied) {
            Swal.fire('No se realizo ningun cambio', '', 'info')
        }
        })
}






function pintarReservacion(Reservacion){


    
    formNombreMascota.value = Reservacion['NOMBRE_MASCOTA'];
    formNombreDueño.value =  Reservacion['NOMBRE_DUENO'];
    formCedula.value = Reservacion['CEDULA'];
    formDireccion.value =  Reservacion['DIRECCION'];
    formLatitud.value =  Reservacion['LATITUD'];
    formLongitud.value =  Reservacion['LONGITUD'];
    formFechaIngreso.value = Reservacion['FECHA_ENTRADA'];
    formFechaSalida.value = Reservacion['FECHA_SALIDA'];
    formSelectCalificacion.value = Reservacion['CALIFICACION'];
    movemap(Reservacion['LATITUD'],Reservacion['LONGITUD']);


    window.localStorage.setItem("idReservacion",Reservacion._id);
    
    
}



function butTableActualizarReservacion(but){

    butFormCrear.disabled = true;
        let id = but.parentNode.parentNode.id;
        getReservacionById(id)
        .then((reservacion)=>{
            pintarReservacion(reservacion[0]);
            butformActualizar.disabled = false;
        });

}

function pintarListadoReservaciones(listado){

    let tableRecord =  document.querySelector('#tableRecord');
    if(tableRecord != null){
        tableRecord.remove();
    }

    const listadoLength = listado.length;
    if(listadoLength > 0){
        let divtable = document.querySelector('#divcontainertable');
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let trhead = document.createElement('tr');  

        table.id = 'tableRecord';
        const arraydata = ['Nombre de mascota','Nombre del dueno','cedula','Direccion','Fecha de entrada','Fecha de salida','Calificacion','Borrar','Actualizar'];
        const arraydatatd = ['NOMBRE_MASCOTA','NOMBRE_DUENO','CEDULA','DIRECCION','FECHA_ENTRADA','FECHA_SALIDA','CALIFICACION'];

        for(let i = 0; i < arraydata.length ; i++){
            let th =  document.createElement('th');
            th.innerHTML = arraydata[i];
            trhead.appendChild(th);
        }

        thead.appendChild(trhead);
        table.appendChild(thead);
        
        
        

        for(let i = 0; i < listadoLength; i++){
            let row = document.createElement('tr');  
            row.id = listado[i]['_id']
            for(let j = 0; j < arraydatatd.length ; j++){
                let td = document.createElement("td");
                td.innerHTML = listado[i][arraydatatd[j]]
                row.appendChild(td);
            }
            let tdBorrar = document.createElement("td");
            let tdActualizar = document.createElement("td");
            tdBorrar.innerHTML = '<button type="button" onclick="butborrarReservacion(this)">Borrar</button>';
            tdActualizar.innerHTML = '<a href="#divformconatiner" type="button" id="butTableActualizar" onclick="butTableActualizarReservacion(this)">Actualizar</a>';
            row.appendChild(tdBorrar);
            row.appendChild(tdActualizar);
            tbody.appendChild(row);
 
        }
        table.appendChild(tbody);
        divtable.appendChild(table);

    }
}


window.addEventListener('load',(event)=>{
    butformActualizar.disabled = true;

   validacionPermisos();  
   limpiarForm();

    obtenerReservaciones()
        .then((listado)=>{
            pintarListadoReservaciones(listado)
        });

})

