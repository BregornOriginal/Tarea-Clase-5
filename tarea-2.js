const $botonEnviar = document.querySelector("#boton-enviar");
let $bienvenidaUsuario = document.querySelector("h1").innerText;

$botonEnviar.onclick = function () {
  const $nombre = document.querySelector("#nombre-usuario").value;
  const $segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
  const $apellido = document.querySelector("#apellido-usuario").value;
  const $edad = Number(document.querySelector("#edad-usuario").value);
  document.querySelector("#datos-personales-usuario"
  ).value = `${$nombre}  ${$segundoNombre}  ${$apellido}  ${$edad} años`;
  document.querySelector("h1").innerText = `Bienvenido ${$nombre}!`;
  return false;
};
