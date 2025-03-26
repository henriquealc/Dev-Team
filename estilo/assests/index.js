const body = document.querySelector("body"); 
const botao = document.getElementById("botaomudarcor");

botao.addEventListener("click", function () {
    body.classList.toggle("modo-escuro");
});