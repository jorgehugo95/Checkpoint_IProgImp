//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!

var readlineSync = require("readline-sync")

console.log(`

Cardápio do Microondas Super Veloz: 

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

`);

let escolha = readlineSync.question("Escolha sua option: ")

if (escolha === '1') {
    console.log('Você selecionou Pipoca')
    var TempoPadrao = 10
} else if (escolha === '2') {
    console.log('Você selecionou Macarrão')
    var TempoPadrao = 8
} else if (escolha === '3') {
    console.log('Você selecionou Carne')
    var TempoPadrao = 15
} else if (escolha === '4') {
    console.log('Você selecionou Feijão')
    var TempoPadrao = 12
} else if (escolha === '5') {
    console.log('Você selecionou Brigadeiro')
    var TempoPadrao = 8
} else {
    return console.log('Prato inexistente')
}

let tempo = readlineSync.question("Escolha o tempo em segundos: ")

function check(tempo, TempoPadrao) {

    if (tempo < TempoPadrao) {
        console.log("Tempo Insuficiente")
    } else if (tempo > TempoPadrao * 2 && tempo < TempoPadrao * 3) {
        console.log("Comida Queimou")
    } else if (tempo > TempoPadrao * 3){
        console.log("Kaboooooom!")
    } else {
        console.log("Prato pronto, bom apetite!")
    }
    
}

 check (tempo, TempoPadrao)
