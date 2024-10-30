const pequenas = parseInt(prompt("Digite a quantidade de camisetas pequenas:"));
const medias = parseInt(prompt("Digite a quantidade de camisetas médias:"));
const grandes = parseInt(prompt("Digite a quantidade de camisetas grandes:"));
const total = (pequenas * 10) + (medias * 12) + (grandes * 15);
document.getElementById("resultado").innerText = `O valor total arrecadado é R$ ${total.toFixed(2)}.`;
