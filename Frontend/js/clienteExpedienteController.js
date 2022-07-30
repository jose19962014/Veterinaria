
let formObservaciones = document.querySelector('#formObservaciones');
let formDireccion = document.querySelector('#formDireccion');
let formCedula = document.querySelector('#formCedula');
let formNombreDueño = document.querySelector('#formNombreDueño');
let formNombreMascota = document.querySelector('#formNombreMascota');

addEventListener('DOMContentLoaded', (event) => {
    formObservaciones.value = "sobre peso \n uñas largas";
    formDireccion.value = "San jose Tibas";
    formCedula.value = "12345678"; 
    formNombreDueño.value = "Jose"; 
    formNombreMascota.value = "Santi"; 
});


