let kilometros = prompt("Ingrese el número de kilómetros recorridos:");
let litros = prompt("Ingrese el número de litros consumidos:");
kilometros = parseFloat(kilometros);
litros = parseFloat(litros);
let consumoPorKilometro = litros / kilometros;
alert("El consumo de combustible es de " + consumoPorKilometro.toFixed(2) + " litros por kilómetro.");
