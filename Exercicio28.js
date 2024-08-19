import PromptSync from "prompt-sync";
const prompt = PromptSync();
let largura = Number(prompt("Digite a largura do terreno: "));
let comprimento = Number(prompt("Digite o comprimento do terreno: "));
if(largura*comprimento < 100){
    console.log(`O terreno é popular.`)
}else if(largura*comprimento >= 100 && largura*comprimento < 500){
    console.log(`O terreno é master.`)
}else{
    console.log(`O terreno é vip.`)
}