
const form = document
  .querySelector("form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fecha = e.path[0][0].value;
    const result = e.path[0][1].value;
    const evento = e.path[0][2].value;
    const cuota = parseInt(e.path[0][3].value);
    const stake = parseInt(e.path[0][4].value);

    Registro.push(new Tike(fecha, evento, cuota, stake, result));
    cargarApp()
  });

  
//por crear en el DOM

