import PromptSync from "prompt-sync";
const prompt = PromptSync();
let ValorA = Number(prompt("Digite o valor de A: "));
let ValorB = Number(prompt("Digite o valor de B: "));
let ValorC = Number(prompt("Digite o valor de C: "));
console.log(`O valor de delta é ${ValorB ** 2 - 4 * ValorA * ValorC}`);