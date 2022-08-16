// inputs
let formNombreMascota = document.querySelector('#formNombreMascota');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formCedula = document.querySelector('#formCedula');
let formDireccion = document.querySelector('#formDireccion');
let formDoctor = document.querySelector('#formDoctor');
let formFechaIngreso = document.querySelector('#formFechaIngreso');
let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');
let formSelectCalificacion = document.querySelector('#selectCalificacion');
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
    formLatitud.value = "";
    formLongitud.value = "";
    formSelectCalificacion.value = 0;
    window.localStorage.removeItem("idCita");
  
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formDoctor.style.borderColor = 'white';
    formFechaIngreso.style.borderColor = 'white';


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

        formFechaIngreso.style.borderColor = 'palegreen';
        return true;
        
    }
    else{
        alerttexto('La fecha de salida es obligatoria')
        formFechaIngreso.style.borderColor = 'red';
        return;        
    }
}

function validacionDeData (){

    if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                    if(validacionFechaEntrada()){
                        if(validacionDoctor()){
                            return true;
                        }else{return false;}
                    }else{return false;}
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}

}

function pintarCita(cita){

    formNombreMascota.value = cita['NOMBRE_MASCOTA']
    formNombreDueño.value = cita['NOMBRE_DUENO']
    formCedula.value = cita['CEDULA']
    formDireccion.value = cita['DIRECCION']
    formLatitud.value = cita['LATITUD']
    formLongitud.value = cita['LONGITUD']

    formDoctor.selectedIndex = [...formDoctor.options].findIndex (option => option.text === cita['DOCTOR']);
    
    formFechaIngreso.value = cita['FECHA_CITA']

    formSelectCalificacion.selectedIndex =  cita['CALIFICACION']
    movemap(cita['LATITUD'],cita['LONGITUD']);


    window.localStorage.setItem("idCita",cita._id);
}

///funciones de la tabla
function butTableActualizarCita(but){
    let id = but.parentNode.parentNode.id;
    butFormCrear.disabled = true;
    butformActualizar.disabled = false;

    getCitaById(id).then((res)=>{
        pintarCita(res[0]);
    });

}


function pintarListadoCitas(listado){
    
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
        const arraydata = ['Nombre de mascota','Nombre del dueno','cedula','Direccion','Fecha de cita','Doctor','Calificacion','Borrar','Actualizar'];
        const arraydatatd = ['NOMBRE_MASCOTA','NOMBRE_DUENO','CEDULA','DIRECCION','FECHA_CITA','DOCTOR','CALIFICACION'];

        for(let i = 0; i < arraydata.length; i++){
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
            tdBorrar.innerHTML = '<button type="button" id="butTableBorrar" onclick="butTableBorrarCita(this)">Borrar</button>';
            tdActualizar.innerHTML = '<a href="#divformconatiner" type="button" id="butTableActualizar" onclick="butTableActualizarCita(this)">Actualizar</a>';
            row.appendChild(tdBorrar);
            row.appendChild(tdActualizar);
            tbody.appendChild(row);
           
        }
        table.appendChild(tbody);
        divtable.appendChild(table);
    }   
}

function butTableBorrarCita(but){
     
    Swal.fire({
        title: 'deseas borrar el expediente?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          let id = but.parentNode.parentNode.id;

            borrarCita(id).then((res)=>{
                Swal.fire({
                title: 'Cita borrada',
                text:  res.msj,
                icon: 'success'
                });  
                // getCitas()
                // .then((listado)=>{
                //     pintarListadoCitas(listado)
                // });
                // limpiarForm();
            
        });
        } else if (result.isDenied) {
            Swal.fire('No se realizo ningun cambio', '', 'info')
        }
        })
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
            crearCita(
            formNombreMascota.value,
            formNombreDueño.value,
            formCedula.value,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value,
            formDoctor.options[formDoctor.selectedIndex].text,
            formFechaIngreso.value,
            formSelectCalificacion.value
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

butformActualizar.addEventListener("click",function(){
  
    let _id = window.localStorage.getItem('idCita')
    if(validacionDeData()){
        actualizarCita(
            _id,
            formNombreMascota.value,
            formNombreDueño.value,
            formCedula.value,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value,
            formDoctor.options[formDoctor.selectedIndex].text,
            formFechaIngreso.value,
            formSelectCalificacion.value
            )
    }
    //limpiarForm();
})

// botones de la tabla

//butTableActualizar.addEventListener('click',getExpedineteById(this));

function fillOutForm(){

 let storage = window.sessionStorage;
 formNombreDueño.value =  storage.getItem('NOMBRE_USARIO');
 formLatitud.value = storage.getItem('LATITUD');
 formLongitud.value = storage.getItem('LONGITUD');
 formDireccion.value = storage.getItem('DIRECCION');
 formCedula.value = storage.getItem('CEDULA');
 movemap(storage.getItem('LATITUD'),storage.getItem('LONGITUD'));

}

window.addEventListener('load',(event)=>{
    butformActualizar.disabled = true;
    getCitas()
    .then((listado)=>{
        pintarListadoCitas(listado)
        fillOutForm();
    });
    limpiarForm();
})