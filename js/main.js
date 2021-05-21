/** INTRODUÇÃO AO JAVASCRIPT **/

console.log("######### INTRODUÇÃO AO JAVASCRIPT #########");

var nome = "Jacques de Lassau";
var n1 = 35;
var n2 = 10;

var frase = "Japão é o melhor time do mundo";

console.log(nome);
console.log(n1 + n2);

console.log(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["Maçã", "Pera", "Banana"];

for(var i=0;i < lista.length; i++){
    console.log(lista[i]);
}

var veiculos = ["Chevrolet", "Fiat"];
veiculos.push("Volkswagen");

console.log(veiculos);

veiculos.pop();
console.log(veiculos);

veiculos.push("Volkswagen");

console.log(veiculos.length);
console.log(veiculos.reverse());

console.log(veiculos.toString());

console.log(veiculos[0]);
console.log(veiculos.toString()[0]);

console.log(lista.join(" - "));

var fruta = {Nome: "Uva", Cor: "Roxa"}
console.log(fruta);

console.log(fruta.Nome);
console.log(fruta.Cor);

fruta = [{Nome: "Uva", Cor: "Roxa"}, {Nome: "Pera", Cor: "Verde"}, {Nome: "Laranja", Cor: "Verde"}];
console.log(fruta);

console.log(fruta[0].Nome);
console.log(fruta[2].Cor);

var idade = 17;

if(idade > 17)
    console.log("Maior de idade");
else
    console.log("Menor de idade");

var count = 0;

while(count < 5){
    console.log(count);
    ++count;
}

console.log(" ");
count = 0;

do{
    console.log(count);
    ++count;
}while(count < 5)

console.log(" ");
for(var i = 0; i < 5; i++)
    console.log(i);

var data = new Date();
console.log(data);
console.log("Dia: " + (data.getDay() + 1));
console.log("Mês: " + (data.getMonth() + 1));
console.log("Ano: " + (data.getUTCFullYear()));

/** PÁGINAS WEB COM JAVASCRIPT **/

console.log("######### PÁGINAS WEB COM JAVASCRIPT #########");

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(3, 2));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);    
}

console.log(setReplace("Vai lá minha seleção, vai Japão!", "Japão", "Brasil"));

var validar;
function ValidarMaiorIdade(idade){
    if(idade >= 18)
        validar = true;
    else
        validar = false;

    return validar;
}

console.log(ValidarMaiorIdade(17));

/** MANIPUILANDO ELEMENTOS NA PÁGINA **/

console.log("######### MANIPUILANDO ELEMENTOS NA PÁGINA #########");

function BtnClicar(){
    document.getElementById("Agradecimento").innerHTML = "<s>Obrigado por clicar!</s>";    
    console.log(document.getElementById("Agradecimento"));
}

function Redirecionar(){
    window.open('https://digitalinnovation.one/'); // Nova aba
    window.location.href = 'https://digitalinnovation.one/'; // Mesma Aba
}

function EfeitoHover(){
    document.getElementById("EfeitoHover").style.cursor = "pointer";
    var estiloNavariavel = document.getElementById("EfeitoHover");
    estiloNavariavel.style.color = "blue";
}

function EfeitoSaidaHover(){    
    var estiloNavariavel = document.getElementById("EfeitoHover");
    estiloNavariavel.style.color = "red";
}

function ElementoPai(elemento){
    elemento.style.cursor = "pointer";
    elemento.style.color = "green";
    elemento.innerHTML = "O evento onmouseout é ativado APENAS quando o cursor é removido do elemento. <br/> Depois disso ele permanece. O elemento foi passado por parâmetro.";    
}

function Carregar(){
    alert("Página carregada com sucesso.");
}

function ChaveLigaDesliga(elemento){
    document.getElementById("ChaveEscolhida").innerHTML = "<b>" + elemento.value + "</b>";
}