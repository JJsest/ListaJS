const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const diasDeVida = idade * 365;
document.getElementById("resultado").innerText = `${nome}, VOCÊ JÁ VIVEU ${diasDeVida} DIAS.`;
