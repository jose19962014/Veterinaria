let formbutAnadirNuevaMascota = document.querySelector("#butAnadirNuevaMascota");





formbutAnadirNuevaMascota.addEventListener('click',function(){
    window.location.href="/Frontend/clienteNewExpediente.html";
});



function butTableActualizarMascotan(but){

        let id = but.parentNode.parentNode.id;
        let NOMBRE_MASCOTA = but.parentNode.parentNode.cells[0].innerHTML;
        window.localStorage.setItem("idExpediente",id)
        window.localStorage.setItem("NOMBRE_MASCOTA",NOMBRE_MASCOTA)

}


function pintarListado(listado){

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

        table.id = 'mascotas';
        const arraydata = ['Mascota','Actualizar'];
        const arraydatatd = ['NOMBRE_MASCOTA'];

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
            let tdActualizar = document.createElement("td");
            tdActualizar.innerHTML = '<a href="/Frontend/clienteExpediente.html" type="button" id="butTableActualizar" onclick="butTableActualizarMascotan(this)">Actualizar</a>';
            //tdActualizar.innerHTML = '<a href="/Frontend/clienteExpediente.html" onclick="butTableActualizarMascotan(this)>Actualizar</a>';
          
            row.appendChild(tdActualizar);
            tbody.appendChild(row);
 
        }
        table.appendChild(tbody);
        divtable.appendChild(table);

    }
}

window.addEventListener('load',(event)=>{
    let cedula = window.sessionStorage.getItem('CEDULA')
    getExpedientesbycedula(cedula).then((res)=>{
        pintarListado(res)
    })

})

