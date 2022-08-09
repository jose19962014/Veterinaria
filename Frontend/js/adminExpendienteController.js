let formObservaciones = document.querySelector('#formObservaciones');
let formDireccion = document.querySelector('#formDireccion');
let formCedula = document.querySelector('#formCedula');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formNombreMascota = document.querySelector('#formNombreMascota');
let formPadecimientos = document.querySelector('#formPadecimientos');
let formLatitud = document.querySelector('#txtLat');
let formLongitud = document.querySelector('#txtLng');
let formcontendorImagen = document.querySelector('#contendorImagen');


let butformActualizar = document.querySelector('#butFormActualizar');
let butFormCrear = document.querySelector('#butFormCrear');
let butFormCancel = document.querySelector('#butFormCancel');


let butTableActualizar = document.querySelector('#butTableActualizar');
let butTableBorrar = document.querySelector('#butTableBorrar');



/// funciones para la tabla del form
function borrarPadecimiento(but){
    but.parentNode.parentNode.remove();
    
}

function agregarPadecimientoEnTabla(){

    if('0' != formPadecimientos.value){
        
        let table = document.querySelector('#tablePadecimientos');
        let numRows = table.rows.length;

        let padecimieto = formPadecimientos.options[formPadecimientos.selectedIndex].text;
        
        for(let i = 1; i < numRows; i++){
           if( table.rows[i].cells[0].innerText == padecimieto) {
            return
           };
        }

        let tbody = document.querySelector('#tablePadecimientos tbody');
        let row = tbody.insertRow();
        let cellNombre = row.insertCell();
        let cellborrar = row.insertCell();
        

        cellNombre.innerHTML = padecimieto;
        cellborrar.innerHTML = '<button type="button" onclick="borrarPadecimiento(this)">X</button>';

        let idsPadecimientosAgregar =  window.localStorage.getItem("idsPadecimientosAgregar");
        let jsonIdsAgregar = [];
        if(idsPadecimientosAgregar != null && idsPadecimientosAgregar != '' && idsPadecimientosAgregar != 'null'){
        
            jsonIdsAgregar = JSON.parse(idsPadecimientosAgregar);
            jsonIdsAgregar.push(padecimieto);
            window.localStorage.setItem("idsPadecimientosAgregar",JSON.stringify(jsonIdsAgregar));
        }    
        else{
            jsonIdsAgregar.push(padecimieto);
            window.localStorage.setItem("idsPadecimientosAgregar",JSON.stringify(jsonIdsAgregar));
        }

    }

};


function borrarPadecimiento(but){
    let idsPadecimientosBorrar =  window.localStorage.getItem("idsPadecimientosBorrar");


    let row = but.parentNode.parentNode;
    let jsonIdsBorrar = [];
    let padeciiminetoName = row.childNodes[0].innerHTML;
    if(row.id != '')
    {
        if(idsPadecimientosBorrar != null && idsPadecimientosBorrar != '' && idsPadecimientosBorrar != 'null'){
        
            jsonIdsBorrar = JSON.parse(idsPadecimientosBorrar);
            jsonIdsBorrar.push(row.id);

            window.localStorage.setItem("idsPadecimientosBorrar",JSON.stringify(jsonIdsBorrar));
        }
        else{
            jsonIdsBorrar.push(row.id);
            window.localStorage.setItem("idsPadecimientosBorrar",JSON.stringify(jsonIdsBorrar));

        }
    }
    else{
        let idsPadecimientosAgregar =  window.localStorage.getItem("idsPadecimientosAgregar");
        let jsonIdsAgregar = [];

        jsonIdsAgregar = JSON.parse(idsPadecimientosAgregar);
        const nuevojsonIdsAgregar = jsonIdsAgregar.filter((item) => item !== padeciiminetoName);
        window.localStorage.setItem("idsPadecimientosAgregar",JSON.stringify(nuevojsonIdsAgregar));

    }
    row.remove();
}


/// para llenar el select 

function agregarOptionsSelect(){
    let conteimetPadecimientos = ['rabia','Azucar','Seguera'];

    let option = document.createElement('option');
    option.text = 'Selecionar';
    option.value = 0;
    formPadecimientos.appendChild(option);

    conteimetPadecimientos.forEach(item=>{
        let option = document.createElement('option');
        option.text = item;
        option.value = item;
        formPadecimientos.appendChild(option);
    });
   

}

//funciones del form

function limpiarForm(){
    formNombreMascota.value = '';
    formNombreDueño.value = '';
    formCedula.value = '';
    formDireccion.value = '';
    formObservaciones.value = '';
    formLatitud.value = '';
    formLongitud.value = '';
    formPadecimientos.value = 0; 
    formcontendorImagen.src = '';
  
    formNombreMascota.style.borderColor = 'white';
    formNombreDueño.style.borderColor = 'white';
    formCedula.style.borderColor = 'white';
    formObservaciones.style.borderColor = 'white';
    formDireccion.style.borderColor = 'white';
    formPadecimientos.style.borderColor = 'white';

    
    window.localStorage.removeItem("idExpediente");
    window.localStorage.removeItem("idsPadecimientosAgregar");
    window.localStorage.removeItem("idsPadecimientosBorrar");

    let tbody = document.querySelector('#tablePadecimientos tbody');
    tbody.innerHTML = '';
    butFormCrear.disabled = false;
    butformActualizar.disabled = true;
}

function alerttexto(texto){
    Swal.fire({
        title: 'Formato de texto erroneo',
        text: texto,
        icon: 'warning'
        })
}

//// validaciones
function  validationJustTextNum(texto){
    const pattern = /^[A-Z0-9\s]+$/gi;
    return  pattern.test(texto);
}

function  validationJustCedula(numero){
   const pattern = /(\d{1}-\d{1,4}-\d{1,4})+$/g;
    return pattern.test(numero);;
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

function validacionObservacion(){
   let textformObservaciones =  formObservaciones.value;
    if(!validationJustTextNum(textformObservaciones)){
        alerttexto('La observacion solo admite numeros y texto y no puede estar vacio')
        formObservaciones.style.borderColor = 'red';
        return;
    }    
 
    else{
        formObservaciones.style.borderColor = 'palegreen';
         return true;
    }
}

function validacionDeData (){

    if(validacionNombreMascota()){
        if(validacionNombreDueno()){
            if(validacionCedula()){
                if(validacionDireccion()){
                    if(validacionObservacion()){
                        return true
                    }else{return false;}
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}

 
        
}




//botones del form
butFormCancel.addEventListener('click',function(){
    limpiarForm();
})


butFormCrear.addEventListener("click",function(){

    if(validacionDeData()){

       

        crearExpediente(
            formNombreMascota.value,
            formNombreDueño.value,
            formCedula.value ,
            formDireccion.value,
            formLatitud.value,
            formLongitud.value ,
            formObservaciones.value,
            formcontendorImagen.src

        ).
        then(expediente=>{

            let _id = expediente.personaDB['_id'];
            

            let idsPadecimientosAgregar =  window.localStorage.getItem("idsPadecimientosAgregar");
            let jsonIdsAgregar = [];
            if(idsPadecimientosAgregar != null && idsPadecimientosAgregar != '' && idsPadecimientosAgregar != 'null'){
                jsonIdsAgregar = JSON.parse(idsPadecimientosAgregar);
                actualizarExpedientePadecimientos( _id,jsonIdsAgregar)
                .then((res)=>{
                    limpiarForm();

                    window.localStorage.setItem("idExpediente",_id);
                    getExpedientesById(_id)
                    .then((expediente)=>{
                        pintarExpediente(expediente[0]);
                        butformActualizar.disabled = false;
                        getExpedientes()
                            .then((listado)=>{
                                pintarListadoExpedientes(listado)
                                 butformActualizar.enabled = true ;
                                 butFormCrear.disabled = true;
                            });
                    });
                   
                });
            }

             
        });

      

    }



    




   
    
})


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
            formObservaciones.value,
            formcontendorImagen.src

        );
        
    }

    let idsPadecimientosBorrar =  window.localStorage.getItem("idsPadecimientosBorrar");
    let jsonIdsBorrar = [];
    if(idsPadecimientosBorrar != null && idsPadecimientosBorrar != '' && idsPadecimientosBorrar != 'null'){
      
        jsonIdsBorrar = JSON.parse(idsPadecimientosBorrar);
        borrarExpedientePadecimientos( _id,jsonIdsBorrar);
    }



    let idsPadecimientosAgregar =  window.localStorage.getItem("idsPadecimientosAgregar");
    let jsonIdsAgregar = [];
    if(idsPadecimientosAgregar != null && idsPadecimientosAgregar != '' && idsPadecimientosAgregar != 'null'){
      
        jsonIdsAgregar = JSON.parse(idsPadecimientosAgregar);
        actualizarExpedientePadecimientos( _id,jsonIdsAgregar);
    }




    limpiarForm();



})


function pintarExpediente(expediente){


    
    let arraryPadecimientos  = expediente['PADECIMIENTOS'];
    let numPadecimientos = arraryPadecimientos.length;
    let tbody = document.querySelector('#tablePadecimientos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < numPadecimientos ; i++){
         
        let row = tbody.insertRow();
        row.id = arraryPadecimientos[i]['_id'];
        let cellNombre = row.insertCell();
        let cellborrar = row.insertCell();

        cellNombre.innerHTML = arraryPadecimientos[i]['PADECIMIENTO'];
        cellborrar.innerHTML = '<button type="button" onclick="borrarPadecimiento(this)">X</button>';
    }
    
    formNombreMascota.value = expediente['NOMBRE_MASCOTA'];
    formNombreDueño.value =  expediente['NOMBRE_DUENO'];
    formCedula.value = expediente['CEDULA'];
    formDireccion.value =  expediente['DIRECCION'];
    formObservaciones.value =  expediente['OBSERVACIONES'];
    formLatitud.value =  expediente['LATITUD'];
    formLongitud.value =  expediente['LONGITUD'];
    formcontendorImagen.src = expediente['FOTO'];
    movemap(expediente['LATITUD'],expediente['LONGITUD']);



    window.localStorage.setItem("idExpediente",expediente._id);
    
    
}

///funciones de la tabla listado

function butTableActualizarExpediente(but){
    butFormCrear.disabled = true;
    let id = but.parentNode.parentNode.id;
    getExpedientesById(id)
    .then((expediente)=>{
        pintarExpediente(expediente[0]);
        butformActualizar.disabled = false;
    });

}

function butborrarExpediente(but){


 
        Swal.fire({
        title: 'deseas borrar el expediente?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

           let _id = but.parentNode.parentNode.id;
            borrarExpediente(_id).then((res)=>{
                Swal.fire({
                title: 'Expediente borradp',
                text:  res.msj,
                icon: 'success'
                });  
                getExpedientes()
                .then((listado)=>{
                    pintarListadoExpedientes(listado)
                });
                limpiarForm();
            
        });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
        })
}

function pintarListadoExpedientes(listado){
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
        const arraydata = ['Nombre de mascota','Nombre del dueno','cedula','Direccion','Observaciones','Borrar','Actualizar'];
        const arraydatatd = ['NOMBRE_MASCOTA','NOMBRE_DUENO','CEDULA','DIRECCION','OBSERVACIONES'];

        for(let i = 0; i < 7 ; i++){
            let th =  document.createElement('th');
            th.innerHTML = arraydata[i];
            trhead.appendChild(th);
        }

        thead.appendChild(trhead);
        table.appendChild(thead);
        
        
        

        for(let i = 0; i < listadoLength; i++){
            let row = document.createElement('tr');  
            row.id = listado[i]['_id']
            for(let j = 0; j < 5 ; j++){
                let td = document.createElement("td");
                td.innerHTML = listado[i][arraydatatd[j]]
                row.appendChild(td);
            }
            let tdBorrar = document.createElement("td");
            let tdActualizar = document.createElement("td");
            tdBorrar.innerHTML = '<button type="button" onclick="butborrarExpediente(this)">Borrar</button>';
            tdActualizar.innerHTML = '<a href="#divformconatiner" type="button" id="butTableActualizar" onclick="butTableActualizarExpediente(this)">Actualizar</a>';
            row.appendChild(tdBorrar);
            row.appendChild(tdActualizar);
            tbody.appendChild(row);
           
        }
        table.appendChild(tbody);
        divtable.appendChild(table);
    }
}


////funcion cuando la pag termina de cargar

window.addEventListener('load',(event)=>{

   validacionPermisos();  
   limpiarForm();

    agregarOptionsSelect();
    getExpedientes()
        .then((listado)=>{
            pintarListadoExpedientes(listado)
        });
    

})

