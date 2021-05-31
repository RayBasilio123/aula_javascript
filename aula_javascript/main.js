
//Variaveis
/*var nome ="Rafael Galleani";
var anos="29";
var frase = "Japão é o melhor time do mundo";
console.log(frase)
console.log(frase.replace('Japão','Brasil'));
alert(nome+' tem '+anos);
*/
//lista

//var lista =["maçã", "pêra","laranja"]
//lista.push('uva')// add um elemento na lista
//lista.pop();//tira o ultimo elemento da lista 
//lista.lenth //tamanho da lista
//lista.reverse //modifica a ordem da lista
//lista.toString() //transforma em string
//lista.join("-") // toca o espaço por algum caracter

// console.log(lista.toString())
// console.log(lista.join(" - "))

//dicionario
// var fruta ={nome:'banana',cor:'Amarela'}
// console.log(fruta)
// alert(fruta.cor)

//Lista de dicionarios
// var frutas =[{nome:'banana',cor:'Amarela'},{nome:'uva' , cor:'roxa'}]
// console.log(frutas)
// alert(frutas[1].cor)

//Condicionais,laços de repetiçao e Date
// exemplo 1
//  var idade=18;
//  if(idade>=18){
//      alert('maior de idade');
//  }else{
//      alert('menor de idade');

//  }

//exemplo 2
// var idade =prompt('Qual sua idade ?');// exibe uma pergunta na tela do usuario
// if(idade>=18){
//     alert('maior de idade');
// }else{
//     alert('menor de idade')
// }

//exemplo 3
// var count = 0;
// while (count<=5){
//     console.log(count);
//     count = count+1;
// };

//exemplo 4
// for (count=0;count<=5;count++){
//     alert(count)
// }

//exemplo 5
// var d = new Date();
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())
// alert(d.getMonth()+1);

//funções
//exemplo 1
// function soma (n1,n2){
//     return n1+n2;
// }

// alert(soma(5,10))

//exemplo 2
// function setReplace(frase,nome, novo_Nome){
//     return frase.replace(nome,novo_Nome)

// }
// alert(setReplace("vai japão","japão","Brasil"));

//exemplo 3
//  function validaIdade(idade){
//      var validar;
//      if(idade>=18){
//          validar =true
//      }else{
//          validar = false
//      }
//      return validar;
//  }

//  var idade = prompt("Qual a sua idade?");
//  console.log(validaIdade(idade));

//botão

function botao(){
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>"
    // console.log(document.getElementById('agradecimento'))
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=8JnQBA6sUwI")
}
function trocar(elemento){
   // document.getElementById('mouse').innerHTML ='Obrigado por passar o mouse';
   elemento.innerHTML= 'Obrigado por passar o mouse'
}
function voltar(elemento){
    //document.getElementById('mouse').innerHTML ='Passe o mouse aqui';
    elemento.innerHTML= "Passe o mouse aqui"
}

function funcaoChange(elemento){
    console.log(elemento.value)

}