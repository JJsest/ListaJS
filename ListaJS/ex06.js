const peso = parseFloat(prompt("Digite o peso do prato montado (em quilos):"));
const valor = peso * 12;
document.getElementById("resultado").innerText = `O valor a pagar é R$ ${valor.toFixed(2)}.`;
