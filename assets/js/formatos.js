const formatoMoneda = (valor)=>{
    return valor.toLocaleString('COP',{style:'currency', currency:'COP', minimumFractionDigits:0});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}
