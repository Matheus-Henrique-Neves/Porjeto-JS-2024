import PromptSync from "prompt-sync";
const prompt = PromptSync();
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
if(num1 > num2){
    console.log(`O número ${num1} é maior que o número ${num2}.`);
}else if(num2 > num1){
    console.log(`O número ${num2} é maior que o número ${num1}.`);
}else{
    console.log(`Os números são iguais.`);
}