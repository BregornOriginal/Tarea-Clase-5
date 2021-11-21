///// Mi forma de resolverlo en base a la clase vista.

const $botonSalarioMensual = document.querySelector("#calcular-salario-mensual");

$botonSalarioMensual.onclick = function () {
  const $sueldoAnual = Number(document.querySelector("#salario-anual").value);
  let salarioMensual;
  salarioMensual = $sueldoAnual / 12;
  document.querySelector("#salario-mensual").value = salarioMensual;
  return false;
};

///////////////////////////////////////////////////////////////////////////////////////////

///// Forma de resolverlo de compañero.

/*
document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}
*/
