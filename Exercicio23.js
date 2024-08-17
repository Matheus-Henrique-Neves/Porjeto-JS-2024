import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome = prompt("Digite o nome da pessoa: ");
let sexo = prompt("Digite o sexo da pessoa (M/F): ");
let valordacompra = Number(prompt("Digite o valor da compra: "));
if (sexo === "M") {
    console.log(`O cliente ${nome} pagará R$ ${valordacompra * 0.95}`);
}else if (sexo === "F") {
    console.log(`O cliente ${nome} pagará R$ ${valordacompra * 0.87}`);
}