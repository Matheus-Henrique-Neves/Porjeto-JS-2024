import PromptSync from "prompt-sync";
const prompt = PromptSync();
let retaA = Number(prompt("Digite o valor da reta A: "));
let retaB = Number(prompt("Digite o valor da reta B: "));
let retaC = Number(prompt("Digite o valor da reta C: "));
if (retaA < retaB + retaC && retaB < retaA + retaC && retaC < retaA + retaB) {
    if (retaA === retaB && retaB === retaC) {
        console.log("É um triângulo equilátero.");
    } else if (retaA === retaB || retaB === retaC || retaC === retaA) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Não é um triângulo.");
}