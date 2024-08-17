import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome = prompt("Digite seu nome: ");
console.log(`Olá da ${nome},é um prazer te conhecer!`);