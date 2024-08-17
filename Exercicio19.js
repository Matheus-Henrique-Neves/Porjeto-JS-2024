import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome= prompt("Digite o nome do aluno: ");
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
if ((nota1+nota2)/2 >= 7){
    console.log(`O aluno ${nome} foi aprovado com a média ${(nota1+nota2)/2}`);
}else{
    console.log(`O aluno ${nome} foi aprovado com baixo aproveitamento com a média ${(nota1+nota2)/2}`);
}