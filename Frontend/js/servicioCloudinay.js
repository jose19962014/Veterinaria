let butSubirImagen = document.querySelector('#butSubirImagen');
let contendorImagen = document.querySelector('#contendorImagen');




let myWidget = cloudinary.createUploadWidget({
  cloudName: 'dp6ercusp', 
  uploadPreset: 'jose_Upload_Images'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      contendorImagen.src = result.info.secure_url;
    }
  }
)


butSubirImagen.addEventListener('click',()=>{
    myWidget.open();
},false);