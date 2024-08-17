import PromptSync from "prompt-sync";
const prompt = PromptSync();
let anoatual = new Date()
let anodeNascimento = Number(prompt("Digite o ano de nascimento: "));
console.log(`A idade é ${ anoatual.getFullYear() - anodeNascimento}`);