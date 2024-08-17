import PromptSync from "prompt-sync";
const prompt = PromptSync();
let dinheiro = prompt("Digite o valor em dinheiro: ");
console.log("Valor em dólar:", (dinheiro / 5.38).toFixed(2));