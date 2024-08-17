import PromptSync from "prompt-sync";
const prompt = PromptSync();
let distancia = prompt("Digite a distância percorrida: ");
console.log("Distância em km:", distancia / 1000);
console.log("Distância em hm:", distancia / 100);
console.log("Distância em dam:", distancia / 10);
console.log("Distância em dm:", distancia * 10);
console.log("Distância em cm:", distancia * 100);
console.log("Distância em mm:", distancia * 1000);