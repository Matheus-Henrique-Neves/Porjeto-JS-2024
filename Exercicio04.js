import PromptSync from "prompt-sync";
const prompt = PromptSync();
let valor = Number(prompt("Digite um valor: "));
let valor2 = Number(prompt("Digite outro valor: "));
let resultado = valor + valor2;
console.log(`A soma dos valores é ${resultado}.`);