let selectResult

const select = document.querySelector('#select'),
      opciones = document.querySelector('#opciones'),
      contenidoSelect = document.querySelector('#select .contenido-select'),
      hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault;
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        selectResult = e.currentTarget.querySelector('.contenido-opcion').dataset.opcion
        // toggle si tiene la clase se la quita si no se la incluye
        select.classList.toggle('active')
        opciones.classList.toggle('active')
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
        console.log(selectResult)
    })
});

select.addEventListener('click', () => {
    console.log('ok')
    select.classList.toggle('active')
    opciones.classList.toggle('active')
})

//const selectItem = document.querySelector('#selectItem');

// selectItem.addEventListener('click', () => {
//     select.classList.toggle('active')
//     opciones.classList.toggle('active')
// })




// efecto maquina de escribir con typed
/*const typed = new Typed('.typed', {
	strings: [
		'<i>Tike Apuesta</i>',
        '<i>Registro</i>'
	], 

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 80, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});*/