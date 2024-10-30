const dia = parseInt(prompt("Digite o dia:"));
const mes = parseInt(prompt("Digite o mês:"));
const diasPassados = (mes - 1) * 30 + dia;
document.getElementById("resultado").innerText = `Se passaram ${diasPassados} dias desde o início do ano.`;
