// criar objeto com nome, profissão, idade

const objeto = {
    nome: "Josiane",
    profissao: "Desenvolvedora Front-end",
    idade: 35,
    site: "https://www.facebook.com/piboxfood/",
    fundo: "http://www.curtamais.com.br/uploads/conteudos/4c17e244313f1241be8fc3a814b5a8b8.jpg"
}
const mae = document.getElementById("matriarca");
mae.classList.add("fundo");

// for(let propriedade in objeto) {
//     let meuObjeto = document.createElement("p");
//     mae.appendChild(meuObjeto);
//     meuObjeto.textContent = objeto[propriedade];
// }


const name = document.createElement("h2");
mae.appendChild(name);
name.textContent = objeto.nome;
name.classList.add("meu_nome")

const work = document.createElement("p");
work.textContent = objeto.profissao;
mae.appendChild(work);

const years = document.createElement("h3");
mae.appendChild(years);
years.textContent = objeto.idade;

const face = document.createElement("a");
mae.appendChild(face);
face.textContent = ("Acessar meu site");
face.setAttribute("href", objeto.site);
face.setAttribute("target", "_blank")









