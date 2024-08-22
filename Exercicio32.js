import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numerosaleatorio= Math.floor(Math.random() * 5) + 1;
let tentativas = 0;
let acertou = false;
while (tentativas < 5) {
    let numero = Number(prompt("Digite um número entre 1 e 5: "));
    if (numero === numerosaleatorio) {
        acertou = true;
        console.log("Parabéns, você acertou!");
        console.log("O número sorteado foi: " + numerosaleatorio);
        console.log("Você acertou na tentativa: " + tentativas);
        break;
    }
    tentativas++;
}
if (!acertou) {
    console.log("Que pena, você não acertou!");
    console.log("O número sorteado foi: " + numerosaleatorio);
    console.log("Você não acertou em nenhuma das 5 tentativas.");
}