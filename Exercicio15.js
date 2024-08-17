import PromptSync from "prompt-sync";
const prompt = PromptSync();
let diastrabalhados = Number(prompt("Digite a quantidade de dias trabalhados: "));
console.log(`O salário a ser pago é R$${diastrabalhados*8*25}`);