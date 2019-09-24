document.addEventListener ("scroll", function(){
    console.log("Rolou a página")
});

// Exercício 03 - Mudando a cor 
// Cada vez que o usuário rolar a página até chegar em uma nova sessão, devemos mudar a cor de fundo daquela sessão.


const primeiraSection = document.getElementById("primeira-section");
const segundaSection = document.getElementById("segunda-section");
const terceiraSection = document.getElementById("terceira-section");

document.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop >= 200) {
        primeiraSection.classList.add("red");
    }
    
    if (document.documentElement.scrollTop >= 401) {
        segundaSection.classList.add("blue");
    }
    if (document.documentElement.scrollTop > 601) {
        terceiraSection.classList.add("green");
    }
});
    
