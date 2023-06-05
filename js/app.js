const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

let name1 = "";
let email = "";
let phone = "";

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,255}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,255}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			console.log(e.target.value)
            name1 = e.target.value;
		break;
		case "correo":
			console.log(e.target.value)
            email = e.target.value;
		break;
		case "telefono":
			console.log(e.target.value)
            phone = e.target.value;
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); // validacion por teclas levantadas
	input.addEventListener('blur', validarFormulario);  // validacion cuando se da click fuera del input
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    console.log("hola")
    console.log( name1 ,email, phone)
});