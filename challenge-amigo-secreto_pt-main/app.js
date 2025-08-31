//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome == "" ){
         alert("Campo vazio, digite um nome");   
    } else {
       listaDeNomes.push(nome);
       document.getElementById("listaAmigos").innerHTML = listaDeNomes.map(n => `<li>${n}</li>`).join("");
       document.getElementById("amigo").value = "";
    }
};

function sortearAmigo() {
    if (listaDeNomes.length > 0) {
        let indice = Math.floor(Math.random() * listaDeNomes.at.length);
        document.getElementById("resultado").innerHTML = `<li>Sorteado: ${listaDeNomes[indice]}</li>`;
    }
};