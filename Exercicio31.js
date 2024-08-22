import PromptSync from "prompt-sync";
const prompt = PromptSync();

let jogarNovamente = true;

while (jogarNovamente) {
    console.log("Vamos jogar pedra, papel e tesoura!");
    console.log("Escolha um dos numeros abaixo:");
    let escolhajogador = Number(prompt("Escolha entre 1(pedra), 2(papel) ou 3(tesoura): "));
    let escolhamaquina = Math.floor(Math.random() * 3) + 1;

    if (escolhajogador == 1) {
        if (escolhamaquina == 1) {
            console.log("Você escolheu pedra e a maquina pedra, deu empate!");
        } else if (escolhamaquina == 2) {
            console.log("Você escolheu pedra e a maquina papel, você perdeu!");
        } else {
            console.log("Você escolheu pedra e a maquina tesoura, você ganhou!");
        }
    } else if (escolhajogador == 2) {
        if (escolhamaquina == 1) {
            console.log("Você escolheu papel e a maquina pedra, você ganhou!");
        } else if (escolhamaquina == 2) {
            console.log("Você escolheu papel e a maquina papel, deu empate!");
        } else {
            console.log("Você escolheu papel e a maquina tesoura, você perdeu!");
        }
    } else {
        if (escolhamaquina == 1) {
            console.log("Você escolheu tesoura e a maquina pedra, você perdeu!");
        } else if (escolhamaquina == 2) {
            console.log("Você escolheu tesoura e a maquina papel, você ganhou!");
        } else {
            console.log("Você escolheu tesoura e a maquina tesoura, deu empate!");
        }
    }

    let resposta = prompt("Deseja jogar novamente? (s/n): ");
    if (resposta.toLowerCase() !== "s") {
        jogarNovamente = false;
    }
}