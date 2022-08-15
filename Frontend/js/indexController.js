let formemailLoogin = document.querySelector('#formemail')
let formpasswordLoogin  = document.querySelector('#formpassword')

function BuscarUsuarioLoggin(){

    getUsuarioByLoggin(formemail.value,formpassword.value).then((res)=>{
       
        if(res.length > 0){
            let storage = window.sessionStorage
        let usuario = res[0];
        storage.setItem('NOMBRE_USARIO',usuario['NOMBRE_USARIO']);
        storage.setItem('CEDULA',usuario['CEDULA']);
        storage.setItem('DIRECCION',usuario['DIRECCION']);
        storage.setItem('LONGITUD',usuario['LONGITUD']);
        storage.setItem('ROL',usuario['ROL']);
        
        //validacionPermisos();    
        window.location.reload();    
        Swal.fire({
                title: 'usurio',
                text: 'Loggin exitoso',
                icon: 'success'
                });  


    
        }else{
            Swal.fire({
                title: 'usurio no encontrado',
                text:'Usurio no esta creado',
                icon: 'warning'
                });                 
        }

    })

}
