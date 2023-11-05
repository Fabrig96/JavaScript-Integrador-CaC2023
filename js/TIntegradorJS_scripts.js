//* Trabajo Integrador Front-End JavaScript - Aguilar Fabrizio *

//-- Cálculo de descuentos y precios totales --
const precioTicket=200;
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

const precioTotal = function (){
    const $cantidad = document.getElementById("cantidad").value;
    const $categoria = document.getElementById("categoria");
    const valorCategoria = $categoria.value;
    let precio_total = $cantidad*precioTicket;
    let descuento;

    if (valorCategoria == "Estudiante"){
        descuento = precio_total*descuentoEstudiante;
    }else if (valorCategoria == "Trainee"){
        descuento = precio_total*descuentoTrainee;
    }else if (valorCategoria == "Junior"){
        descuento = precio_total*descuentoJunior;
    }else if (valorCategoria == "SinCategoria"){
        descuento = 0;
    }

    precio_total -= descuento;
    return precio_total;
}

//--Resumen de pago total-- 
document.getElementById("resumen").addEventListener("click",function(){

    const total=precioTotal();
    console.log(total);
    const $totalPagarBlock = document.getElementById("total-pagar-block");
    $totalPagarBlock.style.display = "block";
    const $totalPagarElement = document.getElementById("total-pagar");
    $totalPagarElement.textContent = "Total a pagar: ";
    const totalSpan = document.createElement("span");
    totalSpan.textContent ="$" +total;
    totalSpan.style.fontWeight = "bold"; 
    $totalPagarElement.appendChild(totalSpan);

})

//--Borrar campos de categorías y cantidad de tickets--
document.getElementById("borrar").addEventListener("click",function(){
    const $categoria = document.getElementById("categoria");
    $categoria.value = "seleccionar";
    const $totalPagarElement = document.getElementById("total-pagar");
    $totalPagarElement.textContent = "Total a pagar: ";
    document.getElementById("cantidad").value = "";
    const $totalPagarBlock = document.getElementById("total-pagar-block");
    $totalPagarBlock.style.display = "none";
    

})

//-- Validaciones de campos de formulario --
document.getElementById('comprar').addEventListener('click', function(event) {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('correo');
    const mensajeError = document.getElementById('mensajeError');
    
    mensajeError.textContent = '';
  
    nombreInput.setCustomValidity('');
    apellidoInput.setCustomValidity('');
    emailInput.setCustomValidity('');
  
    validarCampo(nombreInput, 'Nombre');
    validarCampo(apellidoInput, 'Apellido');
    validarEmail(emailInput);
      
    let mensajes = mensajeError.textContent.trim();
    
    if (mensajes !== '') {
      alert('Por favor, corrige los siguientes errores:\n' + mensajes);
      event.preventDefault(); 
    } else {
        document.getElementById('formulario-ticket').submit(); 
    }
  });
  
  function validarCampo(input, mensaje) {
 
    let valor = input.value.trim();
  
    let contieneNumeros = /\d/.test(valor);
    
    if (input.hasAttribute('required') && valor === '') {
        mostrarMensajeError(mensaje + ' es obligatorio.');
        input.setCustomValidity('Invalid');
    } else if (contieneNumeros) {
        mostrarMensajeError(mensaje + ' no debe contener números.');
        input.setCustomValidity('Invalid');
    } else {
        input.setCustomValidity('');
    }

  }
  
  function validarEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valor = input.value.trim();
  
    if (!regex.test(valor)) {
      mostrarMensajeError('Por favor, ingresa un correo electrónico válido.');
      input.setCustomValidity('Invalid');
    } else {
      input.setCustomValidity('');
    }
  }
  
  function mostrarMensajeError(mensaje) {
    let mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent += mensaje + '\n';
  }