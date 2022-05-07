const form = document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    
    const fecha = e.path[0][0];
    const resultado = e.path[0][1];
    const evento = e.path[0][2];
    const cuota = e.path[0][3];
    const stake = e.path[0][4];

    console.log('ok')
})

const activoInicial = 10000
document.getElementById('activoInicial').innerHTML = activoInicial

