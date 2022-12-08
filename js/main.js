function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por apertar<b>"; 
    //console.log(document.getElementById("agradecimento"));
    //alert('Obrigado por me clicar')
}


function redirecionar(){
    //window.open("https://github.com/RankracerBR");
    //window.location.href = "https://github.com/RankracerBR";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML='Obrigado por passar o mouse';
    elemento.innerHTML = "Obrigado";
    //alert('TE AMO MOIZAUM :3');
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML='Passe o mouse aqui';
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert('página carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt('Qual sua idade: ');
validaIdade(idade)
console.log(validar);


function setReplace(frase,nome, novo_nome){
  return frase.replace(nome,novo_nome);
}

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));











/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
/*



/*var count;
for (count=0; count <= 5; count++){
    alert(count);
} /*




/*var count = 1;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
};
*/






/*var idade = prompt('Qual sua idade?');
if (idade >= 18){
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}; */





var frutas = [{nome:'maça',cor:'vermelha'}, {nome:'uva', cor:'roxa'}] //dicionário
console.log(frutas.nome);
alert(frutas[1].nome);



var lista = ['maça','pera','laranja'];
lista.push('uva');
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "))

//alert(lista[1]);







var nome = "Augusto Pontes";
var n1 = 3;
var n2 = 5;
var frase = "Japão é o melhor time do mundo"
//alert( nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLocaleLowerCase("Brasil"));
alert(frase.replace("Japão","Brasil"))