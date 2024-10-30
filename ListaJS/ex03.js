const paes = parseInt(prompt("Digite a quantidade de pães:"));
const broas = parseInt(prompt("Digite a quantidade de broas:"));
const total = (paes * 0.12) + (broas * 1.50);
const poupanca = total * 0.1;

document.getElementById("resultado").innerText = `Total arrecadado: R$ ${total.toFixed(2)}\nValor para poupança: R$ ${poupanca.toFixed(2)}`;
