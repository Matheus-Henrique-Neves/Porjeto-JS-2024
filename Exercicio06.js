import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numero = Number(prompt("Digite um número: "));
console.log(`O numero antecessor é ${numero - 1} e o sucessor é ${numero + 1}.`);