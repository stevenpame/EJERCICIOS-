function convertirTiempo() {     
    let horas = parseInt(document.getElementById('horas').value);
    let minutos = parseInt(document.getElementById('minutos').value);   
    if (isNaN(horas) || isNaN(minutos)) {
        alert("Por favor, ingrese valores válidos para horas y minutos.");
        return;
    }
    let totalMinutos = horas * 60 + minutos;
    let totalSegundos = totalMinutos * 60;
    document.getElementById('resultado').innerText = `${horas} horas y ${minutos} minutos son ${totalSegundos} segundos.`;
}