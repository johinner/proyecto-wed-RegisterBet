const productContainers = [...document.querySelectorAll('.slider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
let anchoWindow = window.innerWidth;
function resize(){
    anchoWindow = document.documentElement.clientWidth;
    console.log(anchoWindow)
}

function load() {
    document.querySelector('.pre-btn').classList.add('visible')
    console.log('pagina cargada')
}

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log(anchoWindow)
    if (anchoWindow > 1300){
        console.log('mayor')
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth
            nxtBtn[i].classList.add('visible')
            preBtn[i].classList.remove('visible')
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
            nxtBtn[i].classList.remove('visible')
            preBtn[i].classList.add('visible')
        })
    }else{
        console.log('menor')
    }
  
})


const sliderCard = [...document.querySelectorAll('.slider-card')];

const classCSS = (e) => {
   
sliderCard.forEach((item) =>{
    item.classList.remove('slider-active')
})
    e.currentTarget.classList.add('slider-active')
}

sliderCard.forEach((item) => {
            
    item.addEventListener('click', (e)=>{
        e.currentTarget.classList.remove('slider-active')

        if(e.currentTarget.querySelector('#stakeInfo')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#bankActual')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#ingreso')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#bankInicial')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#porcentajeStake')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#egreso')){
            classCSS(e)
        }
        if(e.currentTarget.querySelector('#mesAnterior')){
            classCSS(e)
        }
    })

    
})
