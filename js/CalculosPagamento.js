function CalcularINSS(salarioBruto) {
    let desconto = 0;
    let tetoSalarial = 6433.57;

    if (salarioBruto <= 1100) {
        desconto = salarioBruto * 0.075;
    }
    else if (salarioBruto > 1100 && salarioBruto <= 2203.48) {
        desconto = salarioBruto * 0.09;
    }
    else if (salarioBruto > 2203.48 && salarioBruto <= 3305.22) {
        desconto = salarioBruto * 0.12;
    }
    else if (salarioBruto > 3305.22 && salarioBruto <= tetoSalarial) {
        desconto = salarioBruto * 0.14;
    }
    else {
        desconto = tetoSalarial * 0.14;
    }

    return desconto;
}

function CalcularImpostoRenda(salarioBruto, dependentes, descontoInss) {
    let baseCalculo = 0;
    let desconto = 0;
    let deducaoDependente = 189.59;


    baseCalculo = salarioBruto - (deducaoDependente * dependentes) - descontoInss;

    if (baseCalculo <= 1903.98) {
        desconto = 0;
    }
    else if (baseCalculo > 1903.98 && baseCalculo <= 2826.65) {
        desconto = baseCalculo * 0.075;
    }
    else if (baseCalculo > 2826.65 && baseCalculo <= 3751.05) {
        desconto = baseCalculo * 0.15;
    }
    else if (baseCalculo > 3751.05 && baseCalculo <= 4664.68) {
        desconto = baseCalculo * 0.225;
    } else {
        desconto = baseCalculo * 0.275;
}
     return desconto;
}

function CalcularAssistenciaMedica(salarioBruto, dependentes) {

    let desconto = 0;
    let taxaFixaFuncionario = 30;
    let aliquotaDesconto = 0.02;

    desconto = dependentes * (salarioBruto * aliquotaDesconto);

    desconto += taxaFixaFuncionario;

    return desconto;
}
