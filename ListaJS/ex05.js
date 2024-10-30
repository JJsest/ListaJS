const precoLitro = parseFloat(prompt("Digite o preço do litro da gasolina:"));
const valorPagamento = parseFloat(prompt("Digite o valor que você deseja colocar no tanque:"));
const litros = valorPagamento / precoLitro;
document.getElementById("resultado").innerText = `Você conseguiu colocar ${litros.toFixed(2)} litros no tanque.`;
