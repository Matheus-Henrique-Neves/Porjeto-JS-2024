import PromptSync from "prompt-sync";
const prompt = PromptSync();
let precoProduto = Number(prompt("Digite o preço do produto: "));
console.log(`O preço do produto com 8% de desconto é ${precoProduto * 0.92}`);