const modificarActivos = document.getElementById('modificarActivos'),
      overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
      btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    
modificarActivos.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})