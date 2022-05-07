const ingresos = [
    new Ingreso('20/9/6', 'furbol', 1.7, 2000),
    new Ingreso('20/9/6', 'furbol', 1.6, 4000),
    
];

const egresos = [
    new Egreso('20/87/8', 'furbol', 2, 3000),
    new Egreso('20/87/8', 'furbol', 2, 2000) 
];

const cargarApp = () => {
    cargarEstadisticas();
}



const totalIngresos = () => {
    let totalIngreso = 0;
     for (let item of ingresos){
         totalIngreso += (item.stake * item.cuota) - item.stake
     }
     return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
     for (let item of egresos){
         totalEgreso += item.stake
     }
     return totalEgreso;
}

cargarEstadisticas = () => {
    let activoActual = (totalIngresos() - totalEgresos()) + activoInicial;
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    let totalIngreso =  totalIngresos() - totalEgresos();

    document.getElementById('activoActual').innerHTML = activoActual;
    document.getElementById('porcentajeEgreso').innerHTML = porcentajeEgreso;
    if (totalIngreso <= 0){
        document.getElementById('egreso').innerHTML = totalIngreso;
    }else{
        document.getElementById('ingreso').innerHTML = totalIngreso;
    }
    
 
    
    console.log(ingresos)
    
}



cargarApp();