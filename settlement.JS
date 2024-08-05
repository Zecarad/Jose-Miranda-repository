document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('salarioUSD').addEventListener('input', calcularImpuestos);
    document.getElementById('tipoCambio').addEventListener('input', calcularImpuestos);
});

function calcularImpuestos() {
    const salarioUSD = parseFloat(document.getElementById('salarioUSD').value) || 0;
    const tipoCambio = parseFloat(document.getElementById('tipoCambio').value) || 500;

    const salarioCRC = salarioUSD * tipoCambio;
    let salarioRestante = salarioCRC;
    let impuesto1 = 0, impuesto2 = 0, impuesto3 = 0, impuesto4 = 0, impuesto5 = 0;
    
    if (salarioCRC > 4783000) {
        impuesto5 = (salarioCRC - 4783000) * 0.25;
        salarioRestante = 4783000;
    }
    if (salarioRestante > 2392000) {
        impuesto4 = (salarioRestante - 2392000) * 0.20;
        salarioRestante = 2392000;
    }
    if (salarioRestante > 1363000) {
        impuesto3 = (salarioRestante - 1363000) * 0.15;
        salarioRestante = 1363000;
    }
    if (salarioRestante > 929000) {
        impuesto2 = (salarioRestante - 929000) * 0.10;
        salarioRestante = 929000;
    }
    impuesto1 = 0; // Tramo hasta 929,000 no tiene impuesto

    const totalImpuestos = impuesto1 + impuesto2 + impuesto3 + impuesto4 + impuesto5;
    const ccss = salarioCRC * 0.1067;
    const totalDeducciones = totalImpuestos + ccss;
    const salarioNeto = salarioCRC - totalDeducciones;
    const porcentajeRetenido = (totalDeducciones / salarioCRC) * 100;

    // Actualizar los elementos del HTML con los valores calculados
    document.getElementById('impuesto1').textContent = `₡${impuesto1.toFixed(2)}`;
    document.getElementById('impuesto2').textContent = `₡${impuesto2.toFixed(2)}`;
    document.getElementById('impuesto3').textContent = `₡${impuesto3.toFixed(2)}`;
    document.getElementById('impuesto4').textContent = `₡${impuesto4.toFixed(2)}`;
    document.getElementById('impuesto5').textContent = `₡${impuesto5.toFixed(2)}`;
    document.getElementById('salarioCRC').textContent = salarioCRC.toFixed(2);
    document.getElementById('totalImpuestos').textContent = totalImpuestos.toFixed(2);
    document.getElementById('ccss').textContent = ccss.toFixed(2);
    document.getElementById('totalDeducciones').textContent = totalDeducciones.toFixed(2);
    document.getElementById('salarioNeto').textContent = salarioNeto.toFixed(2);
    document.getElementById('porcentajeRetenido').textContent = `${porcentajeRetenido.toFixed(2)}%`;
}
