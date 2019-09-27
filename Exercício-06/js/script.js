// Temos um formulário em que podemos inserir novos gastos. Vamos realizar os desafios abaixo:
// - Capturar os valores inseridos pelo usuário
// - Exibi-los na tabela
// - Validar os dados inseridos
// - Exibir um erro para o usuário caso os dados estejam incorretos.


const formulario = document.querySelector(".transacao__form");
const tabela = document.querySelector(".extrato__table");

formulario.addEventListener("submit", function(evento) {
   evento.preventDefault();

   const inputUsuario = document.getElementById("transacaoInputNome");
   let valorInputUsuario = inputUsuario.value;

   const inputValor = document.getElementById("transacaoInputValor");
   let valorInputValor = inputValor.value;

   const inputData = document.getElementById("transacaoInputData");
   let valorInputData = inputData.value;

   const novaLinha = document.createElement("tr");
   tabela.appendChild(novaLinha);

   const novoNome = document.createElement("td");
   novaLinha.appendChild(novoNome);
   novoNome.textContent = valorInputUsuario;

   const novoValor = document.createElement ("td");
   novaLinha.appendChild(novoValor);
   novoValor.textContent = valorInputValor;

   const novaData = document.createElement ("td");
   novaLinha.appendChild(novaData);
   novaData.textContent = valorInputData;
})

