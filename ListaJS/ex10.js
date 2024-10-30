const x1 = parseFloat(prompt("Digite a coordenada x do primeiro ponto:"));
const y1 = parseFloat(prompt("Digite a coordenada y do primeiro ponto:"));
const x2 = parseFloat(prompt("Digite a coordenada x do segundo ponto:"));
const y2 = parseFloat(prompt("Digite a coordenada y do segundo ponto:"));
const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
document.getElementById("resultado").innerText = `A distância entre os pontos é ${distancia.toFixed(2)}.`;
