
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA:"));
let montoIva = (precio * iva) / 100;
let precioTotal = precio + montoIva;
alert("El precio total a pagar es: " + precioTotal.toFixed(2));
