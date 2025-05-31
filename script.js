function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('main section');
  secciones.forEach(seccion => {
    seccion.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function saludar() {
  const nombre = document.getElementById('nombreUsuario').value.trim();
  const mensajeDiv = document.getElementById('mensajeSaludo');

  if (!nombre) {
    mensajeDiv.textContent = 'Por favor, ingresa tu nombre.';
    mensajeDiv.style.color = '#c0392b';
    return;
  }

  mensajeDiv.style.color = '#e67e22';
  mensajeDiv.textContent = `¡Hola, ${nombre}! Bienvenido a Calculadora Plus. 😊`;
}


function calcular() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const operacion = document.getElementById('operacion').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = 'Por favor, ingresa ambos números.';
    return;
  }

  let res;
  switch (operacion) {
    case 'sumar': res = n1 + n2; break;
    case 'restar': res = n1 - n2; break;
    case 'multiplicar': res = n1 * n2; break;
    case 'dividir': 
      res = n2 === 0 ? 'Error: No se puede dividir por cero' : (n1 / n2);
      break;
  }

  resultado.textContent = `Resultado: ${res}`;
}

function generarTabla() {
  const num = parseInt(document.getElementById('tablaNum').value);
  const lista = document.getElementById('tablaResultado');
  lista.innerHTML = '';

  if (isNaN(num)) {
    lista.innerHTML = '<li>Por favor, ingresa un número válido.</li>';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = `${num} × ${i} = ${num * i}`;
    lista.appendChild(li);
  }
}
function limpiarCampos() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operacion').value = 'sumar';
  document.getElementById('resultado').textContent = '';
  document.getElementById('tablaNum').value = '';
  document.getElementById('tablaResultado').innerHTML = '';
  document.getElementById('nombre').value = '';
  document.getElementById('saludo').textContent = '';
}

function enviarCorreo(event) {
  event.preventDefault();
  const mensaje = document.getElementById('mensaje').value.trim();
  if (!mensaje) {
    alert('Por favor, escribe un mensaje antes de enviar.');
    return;
  }
  const asunto = encodeURIComponent('Consulta desde Calculadora Plus');
  const cuerpo = encodeURIComponent(mensaje);
  // Abrir cliente correo local
  window.location.href = `mailto:CalculadoraPlus.cs@gmail.com?subject=${asunto}&body=${cuerpo}`;
}



