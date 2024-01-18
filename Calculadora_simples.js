import entrada from 'readline-sync';

console.log ("Aplicaçao de juros\n")

 //Entrada de dados
let valor_divida = entrada.question ('Informe o valor da divida:')

if (valor_divida <= 0)
{
console.log("O valor da divida deve ser maior que zero !");
process.exit(1);
}

let dias_atraso = entrada.question ( 'Quantos dias vc esta em atraso?')

if (dias_atraso <= 0)
{
console.log('Voce esta em dias!')

}


console.log()
//Processamento dos dados

let juros; 

if (dias_atraso > 15)
{
juros = 10;
}
else if (dias_atraso <= 0)
{
    juros = 0
}

else {
juros = 5;
}

let valor_juros = (valor_divida /100) * juros;
let total_divida = Number(valor_divida) + Number(valor_juros);


//Saida de dados
console.log()
console.log('Valor original da divida:' +valor_divida); 
console.log('Dias atrasados:'+dias_atraso);
console.log('Taxa de juros: ' +juros)
console.log('Valor total com juros: ' +total_divida)