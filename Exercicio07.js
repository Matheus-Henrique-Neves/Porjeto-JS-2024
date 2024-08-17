import PromptSync from "prompt-sync";
const prompt = PromptSync();
let numero = Number(prompt("Digite um número: "));
console.log(`o dobro de ${numero} é ${numero * 2}.`);
console.log(`a terceira parte de ${numero} é ${numero / 3}.`);