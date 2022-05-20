const modificarBank = document.getElementById('modificarBank'),
      overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
      btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
      btnModificar = document.getElementById('btnModificar');


let popupTitle = document.querySelector('.popup-title');
let popupSubTitle = document.querySelector('.popup-subtitle');

modificarBank.addEventListener('click',function(){
    btnModificar.dataset.modificar = 'modificarBank'
    console.log(btnModificar.dataset.modificar)
    overlay.classList.add('active')
    popup.classList.add('active')
    popupTitle.innerHTML = 'Manejar el Bank'
    popupSubTitle.innerHTML = 'Apuesta con altas probabilidades de ganar. Lo común es apostar entre el 1% y el 5% de tu Bank inicial.'
})

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})

btnModificar.addEventListener('click', () =>{
    if(btnModificar.dataset.modificar === 'modificarBank'){
        let stake = parseInt(document.getElementById('porcentaje').value);
        let bank = parseInt(document.getElementById('bank').value);
        bankInicial = bank
        porcentajeStake = stake
        overlay.classList.remove('active')
        popup.classList.remove('active')
        cargarEstadisticas()
    }
    if(btnModificar.dataset.modificar === 'modificarTike'){
        console.log('estas en tike')
    }
})

const btnDeletes = document.querySelectorAll('.btn-delete')

btnDeletes.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(!btn.classList.contains('delete')){
            btn.classList.add('delete')
            setTimeout(()=>{
                btn.classList.remove('delete')
            },2500)
        }
    })
})

const modificarItemTike = (id)=>{
    btnModificar.dataset.modificar = 'modificarTike'
    overlay.classList.add('active')
    popup.classList.add('active')
    popupTitle.innerHTML = ''
    popupSubTitle.innerHTML = ''
    console.log(id)
}
