// <!-- criar array
const alunas = ["Maria Luiza", "Isabele Tereza", "Josefa Silva", "Josiane Santiago", "Marilia Gabriela", "Janaina Barbosa"];

// // percorrer todos os itens da array -->
for(let i = 0; i < alunas.length; i++) {
    // <!-- criar um elemento 'li'
    let li = document.createElement("li");
    // capturar 'ul'
    let lista = document.getElementById("lista-alunas");
    lista.appendChild(li);
    // inserir 'li' na 'ul'
    li.textContent = alunas[i];
}

// // outra maneira
//     let i
//     alunas.forEach(function(aluna) {
//     let item = document.createElement ("li");
//     item.textContent = aluna (i);
//     lista.appendChild(item);
// })

let soma = 0
const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function() {
//    meuTitulo.style.color = "red";
    meuTitulo.classList.add("vermelha");
    // daí tenho que criar a classe vermelha no css e definir a cor red
});

