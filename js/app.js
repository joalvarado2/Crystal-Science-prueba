const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.getElementById('information');

// Obtén el elemento del menú de hamburguesa
const menuIcon = document.querySelector('.menu-icon');
// Obtén el elemento del menú
const menu = document.querySelector('.menu');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,255}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,255}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

let campos = {
	nombre: "",
	correo: "",
	telefono: "",
	contenido: ""
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			campos.nombre = e.target.value;
		break;
		case "correo":
			campos.correo = e.target.value;
		break;
		case "telefono":
			campos.telefono = e.target.value;
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); // validacion por teclas levantadas
	input.addEventListener('blur', validarFormulario);  // validacion cuando se da click fuera del input
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	campos.contenido = textarea.value
    console.log(campos)
});

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});
