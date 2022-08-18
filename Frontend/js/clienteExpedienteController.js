
let formObservaciones = document.querySelector('#formObservaciones');
let formDireccion = document.querySelector('#formDireccion');
let formCedula = document.querySelector('#formCedula');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formNombreMascota = document.querySelector('#formNombreMascota');

let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');
let formcontendorImagen = document.querySelector('#contendorImagen');

//botones
let butformActualizar = document.querySelector('#butFormActualizar');
let formbutFormCancel = document.querySelector("#butFormCancel");



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
  
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    window.localStorage.removeItem('UsuarioCedula')
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
     if( !validationJustCedula(numFormCedula)){

        alerttexto('Numero de cedula solo admite numeros, no puede estar vacio y cantidad de digitos tiene que ser 9')
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


function validacionDeData (){


   
    if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                        return true
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}

}


butformActualizar.addEventListener("click",function(){

    let _id =   window.localStorage.getItem("idExpediente");
   
    if(validacionDeData()){
       actualizarExpediente(
            _id,
            formNombreMascota.value,
            formNombreDueño.value,
            formCedula.value ,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value ,
            formcontendorImagen.src

        ).then((res)=>{
            let CEDULA = window.sessionStorage.CEDULA;
            let NOMBRE_MASCOTA = window.localStorage.NOMBRE_MASCOTA;
            
            actualizarcitaBycedulaAndMascota(
                CEDULA,
                NOMBRE_MASCOTA,
                formNombreMascota.value,
                formNombreDueño.value,
                formCedula.value,
                formDireccion.value,
                formLatitud.value,
                formLongitud.value 
            ).then((res)=>{
                     let CEDULA = window.sessionStorage.getItem('CEDULA')
                     window.localStorage.setItem('NOMBRE_MASCOTA',formNombreMascota.value)

                    getCitaByCedulaAndMascota(CEDULA,formNombreMascota.value)
                        .then((listado)=>{
                            pintarListadoCitas(listado);
                        });
            })
            
        });

       
        
    }

});

formbutFormCancel.addEventListener('click',function(){
    window.location.href="/clienteMascota.html";
});



function selectCalifiacionChange(but){
        let id = but.parentNode.parentNode.id;
        let val = but.value;
        
        console.log(id);
        console.log(val);

        actualizarCalificacionCita(id,val)
        .then((res)=>{
            let cedula = window.localStorage.getItem('UsuarioCedula')
            getCitaByCedula(cedula)
                .then((listado)=>{
                    pintarListadoCitas(listado)
                });

	        Swal.fire({
            title: 'Expediente Actualizado',
            text: res.msj,
            icon: 'success'
            }); 

        });

    // getCitaById(id).then((res)=>{
    //     pintarCita(res[0]);
    // });

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
        const arraydata = ['Nombre de mascota','Nombre del dueno','cedula','Direccion','Fecha de cita','Doctor','Calificacion'];
        const arraydatatd = ['NOMBRE_MASCOTA','NOMBRE_DUENO','CEDULA','DIRECCION','FECHA_CITA','DOCTOR'];

        for(let i = 0; i < arraydata.length; i++){
            let th =  document.createElement('th');
            th.innerHTML = arraydata[i];
            trhead.appendChild(th);
        }

        thead.appendChild(trhead);
        table.appendChild(thead);
        
        
        

        for(let i = 0; i < listadoLength; i++){
            let row = document.createElement('tr'); 
            let calificacion =  listado[i]['CALIFICACION']
            row.id = listado[i]['_id']
            for(let j = 0; j < arraydatatd.length ; j++){
                let td = document.createElement("td");
                td.innerHTML = listado[i][arraydatatd[j]]
                row.appendChild(td);
            }
            let tdCalificacion = document.createElement("td");
            if(calificacion == 0 || calificacion == undefined ){
                tdCalificacion.innerHTML = '<select id="selectCalificacion" onchange="selectCalifiacionChange(this)" style="font-size: large ;"> <option value="0" >Selecionar Calificacion<i class="fa-solid fa-star-sharp"></i></option> <option value="1"> &#9733; </option> <option value="2" > &#9733; &#9733; </option> <option value="3"> &#9733; &#9733; &#9733; </option> <option value="4"> &#9733; &#9733; &#9733; &#9733; </option> <option value="5"> &#9733; &#9733; &#9733; &#9733; &#9733; </option> </select>';
                //tdActualizar.innerHTML = '<a href="#divformconatiner" type="button" id="butTableActualizar" onclick="butTableActualizarCita(this)">Actualizar</a>';
            }
            else{
                
                tdCalificacion.innerHTML = calificacion;
            }
            row.appendChild(tdCalificacion);
            tbody.appendChild(row);
           
        }
        table.appendChild(tbody);
        divtable.appendChild(table);
    }   
}


function fillOutForm(){

 let storage = window.sessionStorage;
 formNombreMascota.value =  window.localStorage.getItem('NOMBRE_MASCOTA');
 formNombreDueño.value =  storage.getItem('NOMBRE_USARIO');
 formLatitud.value = storage.getItem('LATITUD');
 formLongitud.value = storage.getItem('LONGITUD');
 formDireccion.value = storage.getItem('DIRECCION');
 formCedula.value = storage.getItem('CEDULA');
 movemap(storage.getItem('LATITUD'),storage.getItem('LONGITUD'));

}


window.addEventListener('load',(event)=>{

 limpiarForm();
    validacionPermisos();  
  
     let CEDULA = window.sessionStorage.getItem('CEDULA')
    let NOMBRE_MASCOTA = window.localStorage.getItem('NOMBRE_MASCOTA')

    getCitaByCedulaAndMascota(CEDULA,NOMBRE_MASCOTA)
        .then((listado)=>{
            pintarListadoCitas(listado);
            fillOutForm();
        });


       

})

