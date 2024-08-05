function calcularLiquidacion() {
    const salariosMensuales = [];
    for (let mes of ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]) {
        let salario = parseFloat(document.querySelector(`input[name=salario${mes}]`).value);
        if (!isNaN(salario)) {
            salariosMensuales.push(salario);
        } else {
            salariosMensuales.push(0);
        }
    }

    const saldoVacaciones = parseFloat(document.getElementById('saldoVacaciones').value) || 0;

    // Calcular aguinaldo
    const totalSalarios = salariosMensuales.reduce((a, b) => a + b, 0);
    const aguinaldoProporcional = totalSalarios / 12;

    // Calcular vacaciones no disfrutadas
    const salarioPromedioMensual = totalSalarios / salariosMensuales.filter(salario => salario > 0).length; // Evitar división por cero
    const salarioDiario = salarioPromedioMensual / 30;
    const pagoVacaciones = saldoVacaciones * salarioDiario;

    // Calcular indemnización por preaviso
    const preavisoDias = 15; // Asumiendo que el preaviso es de 15 días para este ejemplo
    const pagoPreaviso = salarioDiario * preavisoDias;

    // Calcular auxilio de cesantía
    const auxilioCesantiaDias = 19.5; // Asumiendo 19.5 días para este ejemplo
    const pagoCesantia = salarioDiario * auxilioCesantiaDias;

    // Sumar todos los montos
    const totalLiquidacion = aguinaldoProporcional + pagoVacaciones + pagoPreaviso + pagoCesantia;

    // Mostrar el resultado
    document.getElementById('resultadoTexto').innerHTML = `
        <p>Aguinaldo Proporcional: ₡${aguinaldoProporcional.toFixed(2)}</p>
        <p>Vacaciones No Disfrutadas: ₡${pagoVacaciones.toFixed(2)}</p>
        <p>Indemnización por Preaviso: ₡${pagoPreaviso.toFixed(2)}</p>
        <p>Auxilio de Cesantía: ₡${pagoCesantia.toFixed(2)}</p>
        <p>Total Liquidación: ₡${totalLiquidacion.toFixed(2)}</p>
    `;
}
