let bankInicial = 0;
let porcentajeStake = 0;

const Registro = [
  new Tike("20/9/6", "futbol", 4, 5000, "+1/2"),
  new Tike("20/9/6", "futbol", 2, 4000, "-"),
  new Tike("20/9/6", "futbol", 5, 4000, "-1/2"),
];

cargarApp = () => {
  cargarRegitro(Registro);
  cargarEstadisticas();
};

const fragment = new DocumentFragment();

cargarEstadisticas = () => {
  const beneficio = document.querySelectorAll(".elemento-valor");
  let ingresos = 0;
  beneficio.forEach((item) => {
    ingresos = ingresos + parseInt(item.dataset.beneficio);
  });

  document.getElementById("bankActual").innerHTML = formatoMoneda(
    bankInicial + ingresos
  );
  document.getElementById("bankInicial").innerHTML = formatoMoneda(bankInicial);
  document.getElementById("porcentajeStake").innerHTML = porcentajeStake;
  document.getElementById("stake").innerHTML = formatoMoneda(
    (porcentajeStake * (bankInicial + ingresos)) / 100
  );

  const ingreso = document.getElementById("ingreso");
  const egreso = document.getElementById("egreso");
  if (ingresos > 0) {
    ingreso.innerHTML = formatoMoneda(ingresos);
    egreso.innerHTML = "$ 0";
  } else {
    ingreso.innerHTML = "$ 0";
    egreso.innerHTML = formatoMoneda(ingresos);
  }
};

cargarRegitro = (lista) => {
  const List = document.getElementById("listaRegistro");
  List.textContent = "";

  lista.forEach((item) => {
    const element = document.createElement("tr");
    element.className = `conten`;
    let beneficio,
      estado = { class: "status-pending", nombre: "Null" };
    beneficio = 0;

    if (item.result === "+") {
      beneficio = item.cuota * item.stake - item.stake;
      estado.nombre = "positive";
      estado.class = "status-paid";
    }
    if (item.result === "+1/2") {
      beneficio = (item.cuota * item.stake - item.stake) / 2;
      estado.nombre = "1/2 positive";
      estado.class = "status-paid";
    }
    if (item.result === "-") {
      beneficio = item.stake * -1;
      estado.class = "status-unpaid";
      estado.nombre = "negative";
    }
    if (item.result === "-1/2") {
      beneficio = item.stake * -0.5;
      estado.class = "status-unpaid";
      estado.nombre = "1/2 negative";
    }

    element.innerHTML = `  <td>${item.id}</td>
    <td>2022/05/06</td>
    <td>${item.evento}</td>
    <td>${item.cuota}</td>
    <td>${formatoMoneda(item.stake)}</td>
    <td><p class="status ${estado.class}">${estado.nombre}</p></td>
    <td class="elemento">
      <span data-beneficio='${beneficio}' class="elemento-valor">${formatoMoneda(
      beneficio
    )}</span>
      <div class="elemento-editar--btn" onclick='modificarItemTike(${item.id})'>
      <ion-icon class="fa-solid fa-pen-to-square"
      ></ion-icon>
      </div>
    </td>
    `;
    fragment.appendChild(element);
  });

  List.appendChild(fragment);
};

infoTike = (tike, id) => {
  const indice = tike.findIndex((item) => item.id === id)
      
     const infoTike = document.getElementById('infoTike');
     infoTike.innerHTML = `<div class="agregar">
 <div class="agregar-fecha">
   <label>Fecha</label>
   <input type="date" value="2022-05-01" />
 </div>
 <div class="agregar-resultado">
   <label>Resultado</label>
   <select class="agregar-resultado-select" id="select">
   <option selected="">${tike[indice].result}</option>
     <option value="?">?</option>
     <option value="+">+</option>
     <option value="+1/2">+1/2</option>
     <option value="N">N</option>
     <option value="-">-</option>
     <option value="-1/2">-1/2</option>
   </select>
 </div>
 <div class="agregar-resultado">
   <label>Evento</label>
   <select class="agregar-resultado-select evento" id="select">
     <option selected="">${tike[indice].evento}</option>
     <option>Futbol</option>
     <option>Teniz</option>
     <option>Batquebol</option>
     <option>Otro</option>
   </select>
 </div>
 <div class="agregar-cuota">
   <label>Cuota</label>
   <input value="${tike[indice].cuota}" type="number" class="agregar_cuota" required placeholder="2.7" />
 </div>
 <div class="agregar-stake">
   <label>Stake</label>
   <input value="${tike[indice].stake}" type="number" class="agregar_stake" required placeholder="Stake sugerido" />
 </div>`;
};

cargarApp();
