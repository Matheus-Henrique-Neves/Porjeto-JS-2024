import PromptSync from "prompt-sync";
const prompt = PromptSync();
let altura = Number(prompt("Digite a altura: "));
let largura = Number(prompt("Digite a largura: "));
console.log(`a area a ser pintada é ${altura * largura}m² e a quantidade de 
tinta necessária é ${altura * largura / 2} litros`);