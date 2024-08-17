import PromptSync from "prompt-sync";
const prompt = PromptSync();
let salario = Number(prompt("Digite o salário: "));
console.log(`O salário com 15% de aumento é ${salario * 1.15}`);