import PromptSync from "prompt-sync";
const prompt = PromptSync();
let Velocidade = Number(prompt("Digite a velocidade do carro: "));
console.log(`A multa a ser paga é R$${Velocidade > 80 ? (Velocidade - 80) * 5 : 0}`);