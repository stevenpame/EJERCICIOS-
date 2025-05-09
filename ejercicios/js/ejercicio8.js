function calcularIngredientes() { 
    let personas = parseInt(document.getElementById('personas').value);
    if (isNaN(personas) || personas <= 0) {
        alert("Por favor, ingrese un número válido de personas.");
        return;
    }
    let cantidadPapa = personas * 200; 
    let cantidadHuevos = (cantidadPapa / 1000) * 5; 
    let cantidadCebolla = (cantidadPapa / 1000) * 300; 
    document.getElementById('resultado').innerHTML = `
        Para ${personas} persona(s), necesitas:<br>
        - ${cantidadPapa} gramos de papa<br>
        - ${cantidadHuevos} huevos<br>
        - ${cantidadCebolla} gramos de cebolla
    `;
}