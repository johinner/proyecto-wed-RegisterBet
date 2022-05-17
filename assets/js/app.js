const cargarApp = () => {
    cargarRegitro(Registro);
    cargarEstadisticas();
  }

const Registro = [
     new Tike('20/9/6', 'futbol', 4, 5000, '+1/2'),
     new Tike('20/9/6', 'futbol', 2, 4000, '-'),
     new Tike('20/9/6', 'futbol', 5, 4000, '-1/2'),
];


const fragment = new DocumentFragment();

cargarEstadisticas = () => {
    let activoInicial = 10000;
    let porcentajeStake = 10;

    const beneficio = document.querySelectorAll('.elemento-valor')
    let ingresos = 0;
    beneficio.forEach(item =>{
        ingresos = ingresos + parseInt(item.dataset.beneficio)
    })

    document.getElementById('activoActual').innerHTML = formatoMoneda(activoInicial + ingresos);
    document.getElementById("activoInicial").innerHTML = formatoMoneda(activoInicial);
    document.getElementById("porcentajeStake").innerHTML = porcentajeStake;
    document.getElementById("stake").innerHTML = formatoMoneda((porcentajeStake*(activoInicial+ingresos))/100)

    const ingreso = document.getElementById('ingreso');
    const egreso =  document.getElementById('egreso');
    if (ingresos > 0){
        ingreso.innerHTML =formatoMoneda(ingresos)
        egreso.innerHTML = '$ 0'
    }else{
        ingreso.innerHTML = '$ 0'
        egreso.innerHTML = formatoMoneda(ingresos)
    }
}

cargarRegitro = (lista) => {
    
    const List = document.getElementById("listaRegistro");
    List.textContent = "";
    
    lista.forEach(item => {
        const element = document.createElement('tr');
        element.className = `conten`
        let beneficio, estado = {class:'status-pending',nombre:'Null'}
        beneficio = 0;
        

        if(item.result === '+'){
          beneficio = (item.cuota * item.stake) - item.stake;
          estado.nombre = 'positive'
          estado.class = 'status-paid'
        }
        if(item.result === '+1/2'){
          beneficio = ((item.cuota * item.stake) - item.stake)/2;
          estado.nombre = '1/2 positive'
          estado.class = 'status-paid'
        }
        if(item.result === '-'){
          beneficio = item.stake * -1
          estado.class = 'status-unpaid'
          estado.nombre = 'negative'
        }
        if(item.result === '-1/2'){
            beneficio = item.stake * -0.5
            estado.class = 'status-unpaid'
            estado.nombre = '1/2 negative'
        }

        element.innerHTML = 
    `  <td>${item.id}</td>
    <td>2022/05/06</td>
    <td>${item.evento}</td>
    <td>${item.cuota}</td>
    <td>${formatoMoneda(item.stake)}</td>
    <td><p class="status ${estado.class}">${estado.nombre}</p></td>
    <td class="elemento">
      <span data-beneficio='${beneficio}' class="elemento-valor">${formatoMoneda(beneficio)}</span>
      <div typo="button" class="elemento-editar--btn">
        <p class="fa-solid fa-pen-to-square"></p>
      </div>
    </td>
    `;
    fragment.appendChild(element);
    });
    
    List.appendChild(fragment);
}

cargarApp();