function esParOImpar() {
    let numero = parseInt(document.getElementById('numero').value);  
    let resultado = (numero % 2 === 0);  
    document.getElementById('resultado').innerHTML = `El número ${numero} es ${resultado ? 'par' : 'impar'}.`;
}