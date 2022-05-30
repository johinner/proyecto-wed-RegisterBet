let bankInicial = 0;
let porcentajeStake = 0;

const Registro = [
  new Tike("20/9/6", "futbol", 4, 5000, "+ 100%"),
  new Tike("20/9/6", "futbol", 2, 4000, "- 100%"),
  new Tike("20/9/6", "futbol", 5, 4000, "- 50%"),
  new Tike("20/9/6", "futbol", 5, 4000, "Nula"),
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
      estado = { class: "status-pending", nombre: "Nula" };
    beneficio = 0;

    if (item.result === "+ 100%") {
      beneficio = item.cuota * item.stake - item.stake;
      estado.nombre = "+ 100%";
      estado.class = "status-paid";
    }
    if (item.result === "+ 50%") {
      beneficio = (item.cuota * item.stake - item.stake) / 2;
      estado.nombre = "+ 50%";
      estado.class = "status-paid";
    }
    if (item.result === "- 100%") {
      beneficio = item.stake * -1;
      estado.class = "status-unpaid";
      estado.nombre = "- 100%";
    }
    if (item.result === "- 50%") {
      beneficio = item.stake * -0.5;
      estado.class = "status-unpaid";
      estado.nombre = "- 50%";
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
  const indice = tike.findIndex((item) => item.id === id);

  document.getElementById("inputsModifTike").innerHTML = `
              <div class='inputsModifTike'>  
              <form action="#" class="form">


                  <div class="form__div flexWhidth visible">
                    <input value='${tike[indice].id}' type="number" required class="form__input" id="BaseData" placeholder=" " />
                    <label for="" class="form__label">ID</label>
                  </div>

                 <div class="form__div flexWhidth">
                    <input value='${tike[indice].fecha}' class="form__input" id="fecha" placeholder=" " />
                    <label for="" class="form__label">Fecha</label>
                  </div>
      
                  <div class="form__div flexWhidth">
                    <input value='${tike[indice].cuota}' type="number" required class="form__input" id="cuota" placeholder=" " />
                    <label for="" class="form__label">Cuota</label>
                  </div>
      
                  <div class="form__div flexWhidth">
                    <input value='${tike[indice].stake}' type="number" required class="form__input" id="stake" placeholder=" " />
                    <label for="" class="form__label">Stake</label>
                  </div>

                  
      

                <div class="form__select flexWhidth">
                    <select name="format" id="format">
                       <option selected disabled>${tike[indice].result}</option>
                       <option value="+ 100%">+ 100%</option>
                       <option value="+ 50%">+ 50%</option>
                       <option value="- 100%">- 100%</option>
                       <option value="- 50%">- 50%</option>
                       <option value="Nula">Nula</option>
                    </select>
                 </div>
            </form>
            </div> 
          `;
  //  ${tike[indice].result}
  console.log(insertTike);
};

cargarApp();
