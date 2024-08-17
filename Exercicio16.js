import PromptSync from "prompt-sync";
const prompt = PromptSync();
let cigarrosfumados = Number(prompt("Digite a quantidade de cigarros fumados por dia: "));
let anosfumando = Number(prompt("Digite a quantidade de anos fumando: "));
console.log(`A quantidade de dias de vida perdidos é ${cigarrosfumados * anosfumando * 365 * 10 / 1440}`);