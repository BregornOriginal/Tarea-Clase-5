let numerosLi = document.querySelectorAll("#Lista li");
const lista = [];

for (let i = 0; i < numerosLi.length; i++) {
  lista.push(Number(numerosLi[i].innerHTML));
}

function calcularPromedio(lista) {
  let resultado = 0;
  let promedio = 0;
  for (let i = 0; i < lista.length; i++) {
    resultado = resultado + lista[i];
    promedio = resultado / lista.length;
  }
  return promedio;
}

function encontrarMinimo(lista) {
  let numeroMenor = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < numeroMenor) {
      numeroMenor = lista[i];
    }
  }
  return numeroMenor;
}

function encontrarMaximo(lista) {
  let numeroMayor = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > numeroMayor) {
      numeroMayor = lista[i];
    }
  }
  return numeroMayor;
}

function obtenerNumeroMasFrecuente(lista) {
  let numeroMasFrecuente;
  let cantidadNumeroMasFrecuente = 1;
  for (let i = 0; i < lista.length; i++) {
    let cantidadRepeticiones = 0;
    for (let j = i; j < lista.length; j++) {
      if (lista[i] === lista[j]) {
        cantidadRepeticiones++;
      }
    }

    if (cantidadRepeticiones > cantidadNumeroMasFrecuente) {
      cantidadNumeroMasFrecuente = cantidadRepeticiones;
      numeroMasFrecuente = lista[i];
    }
  }
  return numeroMasFrecuente;
}

console.log(
  (document.querySelector(
    "#promedio"
  ).innerHTML = `El promedio es ${calcularPromedio(lista)}`)
);
console.log(
  (document.querySelector(
    "#numeroMayor"
  ).innerHTML = `El número mayor es ${encontrarMaximo(lista)}`)
);
console.log(
  (document.querySelector(
    "#numeroMenor"
  ).innerHTML = `El número menor es ${encontrarMinimo(lista)}`)
);
console.log(
  (document.querySelector("#numeroMasFrecuente").innerHTML = `El 
  número más frecuente es ${obtenerNumeroMasFrecuente(lista)}`)
);
