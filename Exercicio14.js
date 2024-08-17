import PromptSync from "prompt-sync";
const prompt = PromptSync();
let km = Number(prompt("Digite a quantidade de quilômetros percorridos: "));
let dias = Number(prompt("Digite a quantidade de dias que o carro foi alugado: "));
console.log(`O preço a ser pago pelo aluguel do carro é R$${km * 0.20 + dias * 90}`);