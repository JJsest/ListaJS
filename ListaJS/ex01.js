// exercicio1.js
const largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
const comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros:"));
const area = largura * comprimento;
document.getElementById("resultado").innerText = `A área do terreno é ${area} m².`;
