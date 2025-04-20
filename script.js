const hamburger = document.getElementById('hamburguesa');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

const links = sidebar.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
});

document.getElementById("enviar").addEventListener('click', function(){
 
  const input = document.getElementById("nombre");
  const texto = input.value.trim();
  const mensaje = document.getElementById("mensaje-saludo");
  const formulario = document.querySelector(".formulario-contacto");
 
  if (texto){
    mensaje.textContent = `¡Hola ${texto}! ✨, gracias por enviar tu información, me contactaré pronto contigo`
  } else {
    mensaje.textContent = `¡Gracias por tu mensaje! Te responderé pronto.`;
  }
  formulario.reset();
 
})

