const horasDeClases = [];
const minutosDeClases = [];
const segundosDeClases = [];
let horasParciales = 0;
let minutosParciales = 0;
let segundosParciales = 0;

document.querySelector("#cargarTiempo").onclick = function () {
  horasDeClases.push(Number(document.querySelector("#horas").value));
  horasDeClases.push(Number(document.querySelector("#horas2").value));
  horasDeClases.push(Number(document.querySelector("#horas3").value));
  horasDeClases.push(Number(document.querySelector("#horas4").value));
  horasDeClases.push(Number(document.querySelector("#horas5").value));
  horasDeClases.push(Number(document.querySelector("#horas6").value));
  horasDeClases.push(Number(document.querySelector("#horas7").value));
  horasDeClases.push(Number(document.querySelector("#horas8").value));
  horasDeClases.push(Number(document.querySelector("#horas9").value));
  horasDeClases.push(Number(document.querySelector("#horas10").value));
  horasDeClases.push(Number(document.querySelector("#horas11").value));
  horasDeClases.push(Number(document.querySelector("#horas12").value));
  horasDeClases.push(Number(document.querySelector("#horas13").value));
  horasDeClases.push(Number(document.querySelector("#horas14").value));
  horasDeClases.push(Number(document.querySelector("#horas15").value));
  horasDeClases.push(Number(document.querySelector("#horas16").value));
  horasDeClases.push(Number(document.querySelector("#horas17").value));
  horasDeClases.push(Number(document.querySelector("#horas18-1").value));
  horasDeClases.push(Number(document.querySelector("#horas18-2").value));
  horasDeClases.push(Number(document.querySelector("#horas18-3").value));
  horasDeClases.push(Number(document.querySelector("#horas18-4").value));
  horasDeClases.push(Number(document.querySelector("#horas18-5").value));
  horasDeClases.push(Number(document.querySelector("#horas19-1").value));
  horasDeClases.push(Number(document.querySelector("#horas19-2").value));
  horasDeClases.push(Number(document.querySelector("#horas19-3").value));
  minutosDeClases.push(Number(document.querySelector("#minutos").value));
  minutosDeClases.push(Number(document.querySelector("#minutos2").value));
  minutosDeClases.push(Number(document.querySelector("#minutos3").value));
  minutosDeClases.push(Number(document.querySelector("#minutos4").value));
  minutosDeClases.push(Number(document.querySelector("#minutos5").value));
  minutosDeClases.push(Number(document.querySelector("#minutos6").value));
  minutosDeClases.push(Number(document.querySelector("#minutos7").value));
  minutosDeClases.push(Number(document.querySelector("#minutos8").value));
  minutosDeClases.push(Number(document.querySelector("#minutos9").value));
  minutosDeClases.push(Number(document.querySelector("#minutos10").value));
  minutosDeClases.push(Number(document.querySelector("#minutos11").value));
  minutosDeClases.push(Number(document.querySelector("#minutos12").value));
  minutosDeClases.push(Number(document.querySelector("#minutos13").value));
  minutosDeClases.push(Number(document.querySelector("#minutos14").value));
  minutosDeClases.push(Number(document.querySelector("#minutos15").value));
  minutosDeClases.push(Number(document.querySelector("#minutos16").value));
  minutosDeClases.push(Number(document.querySelector("#minutos17").value));
  minutosDeClases.push(Number(document.querySelector("#minutos18-1").value));
  minutosDeClases.push(Number(document.querySelector("#minutos18-2").value));
  minutosDeClases.push(Number(document.querySelector("#minutos18-3").value));
  minutosDeClases.push(Number(document.querySelector("#minutos18-4").value));
  minutosDeClases.push(Number(document.querySelector("#minutos18-5").value));
  minutosDeClases.push(Number(document.querySelector("#minutos19-1").value));
  minutosDeClases.push(Number(document.querySelector("#minutos19-2").value));
  minutosDeClases.push(Number(document.querySelector("#minutos19-3").value));
  segundosDeClases.push(Number(document.querySelector("#segundos").value));
  segundosDeClases.push(Number(document.querySelector("#segundos2").value));
  segundosDeClases.push(Number(document.querySelector("#segundos3").value));
  segundosDeClases.push(Number(document.querySelector("#segundos4").value));
  segundosDeClases.push(Number(document.querySelector("#segundos5").value));
  segundosDeClases.push(Number(document.querySelector("#segundos6").value));
  segundosDeClases.push(Number(document.querySelector("#segundos7").value));
  segundosDeClases.push(Number(document.querySelector("#segundos8").value));
  segundosDeClases.push(Number(document.querySelector("#segundos9").value));
  segundosDeClases.push(Number(document.querySelector("#segundos10").value));
  segundosDeClases.push(Number(document.querySelector("#segundos11").value));
  segundosDeClases.push(Number(document.querySelector("#segundos12").value));
  segundosDeClases.push(Number(document.querySelector("#segundos13").value));
  segundosDeClases.push(Number(document.querySelector("#segundos14").value));
  segundosDeClases.push(Number(document.querySelector("#segundos15").value));
  segundosDeClases.push(Number(document.querySelector("#segundos16").value));
  segundosDeClases.push(Number(document.querySelector("#segundos17").value));
  segundosDeClases.push(Number(document.querySelector("#segundos18-1").value));
  segundosDeClases.push(Number(document.querySelector("#segundos18-2").value));
  segundosDeClases.push(Number(document.querySelector("#segundos18-3").value));
  segundosDeClases.push(Number(document.querySelector("#segundos18-4").value));
  segundosDeClases.push(Number(document.querySelector("#segundos18-5").value));
  segundosDeClases.push(Number(document.querySelector("#segundos19-1").value));
  segundosDeClases.push(Number(document.querySelector("#segundos19-2").value));
  segundosDeClases.push(Number(document.querySelector("#segundos19-3").value));

  for (let i = 0; i < horasDeClases.length; i++) {
    horasParciales += horasDeClases[i];
  }
  for (let i = 0; i < minutosDeClases.length; i++) {
    minutosParciales += minutosDeClases[i];
  }
  for (let i = 0; i < segundosDeClases.length; i++) {
    segundosParciales += segundosDeClases[i];
  }

  const segundosTotal = segundosParciales % 60;
  const minutosTotal =
    (minutosParciales + Math.floor(segundosParciales / 60)) % 60;
  const horasTotal =
    horasParciales +
    Math.floor(minutosParciales / 60) +
    Math.floor(segundosParciales / 3600);

  document.querySelector(
    "#total"
  ).innerText = `Total de horas ${horasTotal} Horas, ${minutosTotal} Minutos y ${segundosTotal} Segundos`;

  return false;
};
