document.querySelector("#insertTike").addEventListener("submit", function (e) {
    e.preventDefault();

     const evento = 'Global'    
     const result = selectResult;
     const fecha = document.getElementById('fecha').value;
     const cuota = parseInt(document.getElementById('cuota').value);
     const stake = parseInt(document.getElementById('stake').value);

     if (result === undefined){
      showMessage('Error', 'A un le falta Selecionar un resultado', 'danger');
     }else{
      Registro.unshift(new Tike(fecha, evento, cuota, stake, result));
      cargarApp()
      showMessage('Exitoso', 'Nuevo registro agregado', 'success');
      document.getElementById('cuota').value = ''
      document.getElementById('stake').value = ''
     }
  
  });






