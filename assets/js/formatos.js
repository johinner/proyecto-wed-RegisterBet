const formatoMoneda = (valor)=>{
    return valor.toLocaleString('USD',{ currency:'USD', minimumFractionDigits:1});
}


const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}
