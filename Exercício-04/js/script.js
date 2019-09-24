// Vamos criar um objeto pinguim que contenha nome, idade e origem. Depois, criaremos métodos para o pinguim andar e voar. Para voar, ele deverá ter uma propriedade podeVoar verdadeira.
let pinguim = {
    "nome": "Bicão",
    "idade": "15",
    "origem": "Antártida"
}
pinguim.voar = function() {
    console.log("Voou")
}
pinguim.andar = function() {
    console.log("Andou")
}

pinguim.podeVoar = false

pinguim.voar = function() {
    if (pinguim.podeVoar) {
        console.log("Pinguim pode voar")
    }else   {
        console.log("Pinguim não pode voar")
    }
}