// Función para calcular la huella de carbono
function calcularHuella(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const distancia = parseFloat(document.getElementById('distance').value);
    const modo = document.getElementById('mode').value;

    let huella;

    // Definir la huella de carbono por modo de transporte (en kg de CO2)
    switch (modo) {
        case 'car':
            huella = distancia * 0.21; // kg CO2 por km en auto
            break;
        case 'bus':
            huella = distancia * 0.05; // kg CO2 por km en autobús
            break;
        case 'bike':
            huella = 0; // Bicicleta no genera huella de carbono
            break;
        default:
            huella = 0;
    }

    // Asignar un indicador de huella de carbono
    let indicador;
    if (huella <= 1) {
        indicador = "Baja";
    } else if (huella <= 5) {
        indicador = "Media";
    } else {
        indicador = "Alta";
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h4>Huella de Carbono:</h4>
        <p>${huella.toFixed(2)} kg de CO2</p>
        <p>Tu huella de carbono es <strong>${indicador}</strong>.</p>
    `;
}

// Añadir el evento al formulario
document.getElementById('carbonForm').addEventListener('submit', calcularHuella);