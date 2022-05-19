const modificarBank = document.getElementById('modificarBank'),
      overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
      btnCerrarPopup = document.getElementById('btn-cerrar-popup');
      

let popupTitle = document.querySelector('.popup-title');
let popupSubTitle = document.querySelector('.popup-subtitle');

modificarBank.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active')
    popupTitle.innerHTML = 'Manejar el Bank'
    popupSubTitle.innerHTML = 'Apuesta con altas probabilidades de ganar. Lo común es apostar entre el 1% y el 5% de tu Bank inicial.'
})

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})

document.getElementById('modificar').addEventListener('click', () =>{
    let stake = parseInt(document.getElementById('porcentaje').value);
    let bank = parseInt(document.getElementById('bank').value);
    console.log(porcentajeStake)
    overlay.classList.remove('active')
    popup.classList.remove('active')
    cargarEstadisticas()
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
    overlay.classList.add('active')
    popup.classList.add('active')
    popupTitle.innerHTML = ''
    popupSubTitle.innerHTML =''
    console.log(id)
}
