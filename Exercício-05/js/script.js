const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const listaLivros = document.getElementById("lista-do-catalogo");
   
for (let propriedade in livros) {
    const meuLivro = document.createElement("li");
    listaLivros.appendChild(meuLivro);
    meuLivro.classList.add("livro");
    
    const titulo = document.createElement("h2");
    meuLivro.appendChild(titulo);
    titulo.textContent = livros[propriedade]["titulo"];
    titulo.classList.add("livro__titulo");
   
    const autor = document.createElement("p");
    meuLivro.appendChild(autor);
    autor.textContent = livros[propriedade]["quemEscreveu"];
    autor.classList.add("livro__autoria");

    const linkLivros = document.createElement("a");
    meuLivro.appendChild(linkLivros);
    linkLivros.textContent = "Leia aqui";
    linkLivros.setAttribute("href", livros[propriedade]["link"]);
    linkLivros.setAttribute("target", "_blank");
    linkLivros.classList.add("livro__link");

    const button = document.createElement("button");
    meuLivro.appendChild(button);
    button.textContent = "Marcar como lido";
    button.classList.add("botao-lido");

    button.addEventListener("click", function() {
        
        if (titulo.classList.contains ("livro__titulo--lido")) {
            // Verifica se o título já está marcado como lido
            button.textContent = "Marcar como lido";
            // marco o título como não lido
            titulo.classList.remove("livro__titulo--lido");
            // removo a cor vermelha do botão e volta para a cor verde
            button.classList.remove("botao-muda"); 
        }else {
            // marco o livro como lido e volto o texto inicial
            titulo.classList.add("livro__titulo--lido");
            button.textContent = "Marcar como não lido";
            // coloco a cor verde no botão
            button.classList.add("botao-muda");
        }   
    })    

        
     // if (button.classList.contains("livro__titulo--lido") {
     //     button.classList.add("botao-muda");
    //     button.textContent = "Desfazer";
    // }
      
    
    // const button2 = document.createElement("button");
    // meuLivro.appendChild(button2);
    // button2.textContent = "Desfazer";
    // button2.classList.add("botao-desfazer");
    // button2.addEventListener("click", function() {  
    //     titulo.classList.remove("livro__titulo--lido");  
    // })  
}


// CRIANDO TOGGLE
//     if (tituloLivro.classList.contains("livro__titulo--lido")) {
//         tituloLivro.classList.remove("livro__titulo--lido");
//     }else {
//         tituloLivro.classList.add("livro__titulo--lido");
//     }

