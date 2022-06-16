function calcularDescontos() {

    let nome;
    let salarioBruto;
    let dependentes;
    let salarioLiquido = 0;
    let inss = 0;
    let irrf = 0;
    let am = 0; 

    nome = prompt("Digite o nome do funcionário: ");
    salarioBruto = parseFloat(prompt("Digite o Salário: "));
    dependentes = parseInt(prompt("Digite o nro de dependentes: "));

    inss = CalcularINSS(salarioBruto);

    irrf = CalcularImpostoRenda(salarioBruto, nrodependentes , inss);

    am = CalcularAssistenciaMedica(salarioBruto, dependentes);

    salarioLiquido = salarioBruto - inss - irrf - am;

    document.write("Nome: " + nome);
    document.write("<br>");
    document.write("Salário Bruto: " + salarioBruto);
    document.write("<br>");
    document.write("Inss: " + inss);
    document.write("<br>");
    document.write("Irrf: " + irrf);
    document.write("<br>");
    document.write("Assistência Médica: " + am);
    document.write("<br>");
    document.write("Total Descontos: " + (inss + irrf + am));
    document.write("<br>");
    document.write("Salário Liquido: " + salarioLiquido);
}