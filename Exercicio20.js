import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numero = Number(prompt("Digite um número: "));
console.log(`O número ${numero} é ${numero % 2 == 0 ? "par" : "ímpar"}`);