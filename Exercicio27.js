import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
if(nota1+nota2/2 >= 7){
    console.log(`Aprovado.`);
}else if(nota1+nota2/2 < 7 && nota1+nota2/2 >= 5){
    console.log(`Recuperação.`);
}else{
    console.log(`Reprovado.`);
}