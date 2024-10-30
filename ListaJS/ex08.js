const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const media = (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;
document.getElementById("resultado").innerText = `A média ponderada é ${media.toFixed(2)}.`;
