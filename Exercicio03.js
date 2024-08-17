import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome = prompt("Digite seu nome: ");
let salario = prompt("Digite seu salário: ");
console.log(`O funcionaŕio ${nome} tem um salário de R$ ${salario}.`);