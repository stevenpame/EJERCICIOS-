function intercambiarValores() {        
    let a = parseInt(document.getElementById('variableA').value);
    let b = parseInt(document.getElementById('variableB').value);
    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, ingresa valores válidos para las variables.");
        return;
    } 
    let temp = a; 
    a = b;        
    b = temp;     
    document.getElementById('resultado').innerHTML = `
        Después del intercambio:<br>
        - Variable A: ${a}<br>
        - Variable B: ${b}
    `;
}