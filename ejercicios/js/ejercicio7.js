function extraerUnidadesYDecenas() {
    let numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 10 || numero > 99) {
        alert("Por favor, ingrese un número de dos dígitos.");
        return;
    }
    let decenas = Math.floor(numero / 10); 
    let unidades = numero % 10; 
    document.getElementById('resultado').innerText = `Decenas: ${decenas}, Unidades: ${unidades}`;
}