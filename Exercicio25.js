import PromptSync from "prompt-sync";
const prompt = PromptSync();
let retaA = Number(prompt("Digite o valor da reta A: "));
let retaB = Number(prompt("Digite o valor da reta B: "));
let retaC = Number(prompt("Digite o valor da reta C: "));
if (retaA < retaB + retaC && retaB < retaA + retaC && retaC < retaA + retaB) {
    console.log("É um triângulo.");
} else {
    console.log("Não é um triângulo.");
}