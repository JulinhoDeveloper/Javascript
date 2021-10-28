// condicionais avançadas
// precisa de apenas uma condição verdadeira

var hora = 12;

if ( hora == 12 || hora == 18 ){
    console.log("hora do rush");
} 

// as duas condições reisam ser verdadeira para executar
var hora = 15;

if ( hora >= 12 && hora < 18 ){
    console.log("Bom dia");
} 


//condicionais
var hora = 9;

if ( hora < 12 ){
    console.log("Bom dia");
} 

else if ( hora < 18 ){
    console.log("Boa tarde");
} 
else if ( hora <= 23 ){
    console.log("Boa noite");
} 

// variáveis
var nome = "Julio";
var sobrenome = "César";
var nomecompleto = nome +" "+ sobrenome;
var idade = 90;
alert(idade);
alert(nomecompleto);
var x = 10;
var y = 15;
var total = x + y;
alert(total);

document.getElementById("titulo").innerHTML = "Opa tudo bem";

document.write("Algum texto");

window.alert("Mensagem de texto");

console.log("aparecerá no console");
