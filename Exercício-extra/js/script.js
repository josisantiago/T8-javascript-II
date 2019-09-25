// // CAPTURAR O ELEMENTO "formulario-de-comentarios" (get.ElementById) E SALVAR EM UMA CONSTANTE
// const formulario = document.getElementById("formulario-de-comentarios"); 
// const erro = document.getElementById("mensagem_erro")
// // QUERO ESCUTAR (addEventListener) UM EVENTO SÓ NO FORMULÁRIO (formulario.), NO CASO O "SUBMIT" que é um parâmetro ("submit"), O SEGUNDO PARÂMETRO É A AÇÃO "function()" QUE É UM CALLBACK (o que vai acontecer ao ser escutado o submit)
// formulario.addEventListener("submit", function(evento){
//     evento.preventDefault();
//     // evento é o relatório do que aconteceu. Eu estou impedindo que a página não faça o comportamento padrão que é recarregar a página quando o formulário for enviado, usando o método .preventDefault()

//     let inputUsuario = document.querySelector(".input-de-texto");
//     // capturei o texto (INPUT) que vai dentro da caixa ENVIAR.Usei querySelector porque quero apenas o primeiro input que o usuário der

//      // criei uma let para guardar a mensagem digitada pelo usuário
//     let mensagem = inputUsuario.value; 

//     // criei uma condição se não for digitado nenhum comentário
//     if (inputUsuario.value.trim == ""){
//         let msgerro = document.createElement("p");
//         erro.appendChild(msgerro);
//         erro.textContent = "Digite seu comentário";
        

//         // coloquei cor na msg de erro, criando uma classe erro e atribuindo "red" a ela no css
//         erro.classList.add("erro");
//     }else {
//      // console.log(mensagem);
//     // // mandei imprimir no console a mensagem digitada pelo usuário

//     // criar o elemento e a tag que eu quero criar, no meu caso, um "p"
//     const comentario = document.createElement("p");
  
//     // criar o conteúdo do elemento
//     comentario.textContent = mensagem;
    
//     // criar a constante mãe e dizer o que ela tem que conter "document.getElementById("todos-os-comentarios");" Melhor performance do programa se criada fora da função
//     const mae = document.getElementById("todos-os-comentarios"); 

//     // coloca um filho dentro da mãe 
//     mae.appendChild(comentario);
// //   "mae.adote(filho)"

//     // adicionei a classe comentário do css ao js
//     comentario.classList.add("comentario"); 
//     comentario.classLisst.add("erro")
//     // apagar o nome após enviar
//     formulario.reset();
//     // ou inputUsuario.value = "";
//     erro.textContent = "";
//     }
// });


const formulario = document.getElementById("formulario-de-comentarios"); 
const erro = document.getElementById("mensagem_erro")
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    let inputUsuario = document.querySelector(".input-de-texto");
    let mensagem = inputUsuario.value; 
    if (inputUsuario.value.trim() == ""){
        let msgerro = document.createElement("p");
        erro.appendChild(msgerro);
        erro.textContent = "Digite seu comentário";
        erro.classList.add("erro");
    }else {
        const comentario = document.createElement("p");
        comentario.textContent = mensagem;
        const mae = document.getElementById("todos-os-comentarios");    
        mae.appendChild(comentario);
        comentario.classList.add("comentario"); 
        comentario.classLisst.add("erro")
        formulario.reset();
        erro.textContent = "";
    }
});
