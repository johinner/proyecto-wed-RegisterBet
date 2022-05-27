const btnModificarBank = document.getElementById('modificarBank');
    let  porcentaje = document.getElementById('porcentaje'),
         bank =  document.getElementById('bank');

const overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
      btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
      btnModificar = document.getElementById('btnModificar'),
      btnDelete = document.getElementById('btnDelete');

let popupTitle = document.querySelector('.popup-title');
let popupSubTitle = document.querySelector('.popup-subtitle');

const inputsModifBank = document.getElementById('inputsModifBank');
const inputsModifTike = document.getElementById('inputsModifTike');
btnCerrarPopup.addEventListener('click',function(){
    ActiveWindow('off');
})

btnModificarBank.addEventListener('click',function(){
    ActiveWindow('on');
    contentWindow('ModificarBank')
    popupTitle.innerHTML = 'Manejar el Bank'
    popupSubTitle.innerHTML = 'Apuesta con altas probabilidades de ganar. Lo común es apostar entre el 1% y el 5% de tu Bank inicial.'
    porcentaje.value = ''
    bank.value = ''
})
// window popup btnModificar
btnModificar.addEventListener('click', () =>{
    if(btnModificar.dataset.modificar === 'modificarBank'){
        ActiveWindow('off');
        if ( porcentaje.value === ''){
            porcentajeStake = porcentajeStake
        }else{
            porcentajeStake = parseInt(porcentaje.value);
        }
        if(bank.value === ''){
            bankInicial = bankInicial
        }else{
            bankInicial = parseInt(bank.value);
        }
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
// funcion btn item tike tabla
const modificarItemTike = (id) =>{
    ActiveWindow('on');
    contentWindow('modificarItemTike')
    infoTike(Registro, id);
    popupTitle.innerHTML = `TIKE # ${id}`
    popupSubTitle.innerHTML = ''
    
}

const ActiveWindow = (active) => {
    if (active === 'on'){
        overlay.classList.add('active')
        popup.classList.add('active')
    }
    if (active === 'off'){
        overlay.classList.remove('active')
        popup.classList.remove('active')
    }
}

 const contentWindow = (btnApplication) => {
        if (btnApplication === 'modificarItemTike'){
            btnModificar.dataset.modificar = 'modificarTike'

            inputsModifTike.classList.remove('visible')
            btnDelete.classList.remove('visible')
            inputsModifBank.classList.add('visible');
        }
        if(btnApplication === 'ModificarBank'){
            btnModificar.dataset.modificar = 'modificarBank'

            inputsModifTike.classList.add('visible')
            inputsModifBank.classList.remove('visible');
            btnDelete.classList.add('visible');
        }
 }