function Calcular() {
    console.log('cheguei aqui');
    if (document.getElementById('txtNome').value == '') {
        alert('Campo nome é obrigatório');
        return false;
    }
    if (document.getElementById('txtSalario').value == '') {
        alert('Campo salário é obrigatório');
        return false;
    }

    if (document.getElementById('txtDependentes').value == '') {
        document.getElementById('txtDependentes').value = 0;
    }

    let nome;
    let salario;
    let dependentes;
    let inss = 0;
    let irrf = 0;
    let am = 0;
    let descontos = 0;
    let salarioLiquido = 0;

    nome = document.getElementById('txtNome').value;
    salario = parseFloat(document.getElementById('txtSalario').value);
    dependentes = parseInt(document.getElementById('txtDependentes').value);

    inss = CalcularINSS(salario);
    irrf = CalcularImpostoRenda(salario, dependentes, inss);
    am = CalcularAssistenciaMedica(salario, dependentes);
    console.log('salario' + salario);
    console.log('inss' + inss);
    console.log('am' + am);
    console.log('irrs' + irrf);
    

    descontos = inss + irrf + am;
    salarioLiquido = salario - descontos;

    document.getElementById('txtResultNome').value = nome;
    document.getElementById('txtResultSalarioBruto').value = salario;
    document.getElementById('txtResultDependentes').value = dependentes;
    document.getElementById('txtResultInss').value = inss;
    document.getElementById('txtResultIRRF').value = irrf;
    document.getElementById('txtResultAM').value = am;
    document.getElementById('txtResultDescontos').value = descontos;
    document.getElementById('txtResultSalarioLiquido').value = salarioLiquido;

    document.getElementById('dvResultados').style.display = 'block';

}