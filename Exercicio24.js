import PromptSync from "prompt-sync";
const prompt = PromptSync();
let distancia = Number(prompt("Digite a distância que deseja andar: "));
if(distancia <= 200){
    console.log(`O preço da passagem é R$${distancia * 0.50}`)}
else if(distancia > 200){
    console.log(`O preço da passagem é R$${distancia * 0.45}`)}