import PromptSync from "prompt-sync";
const prompt = PromptSync();
let salario = Number(prompt("Digite o salário do funcionário: "));
let tempo = Number(prompt("Digite o tempo de serviço do funcionário: "));
if(tempo < 3){
    console.log(`O funcionário receberá um aumento de 3% no salário, totalizando R$${salario*1.03}`);
}else if(tempo >= 3 && tempo < 10){
    console.log(`O funcionário receberá um aumento de 12.5% no salário, totalizando R$${salario*1.125}`)
}else{
    console.log(`O funcionário receberá um aumento de 20% no salário, totalizando R$${salario*1.2}`);
}