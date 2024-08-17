import PromptSync from "prompt-sync";
const prompt = PromptSync();
let anodeNascimento = Number(prompt("Digite o ano de nascimento: "));
let anoatual = new Date()
if(anoatual.getFullYear() - anodeNascimento >= 18){
    console.log("Maior de idade, tem que fazer o alistamento militar.");
}else{
    console.log("Menor de idade, não precisa fazer o alistamento militar ainda.");
}