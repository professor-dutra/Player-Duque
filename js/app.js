/* ELEMENTOS DAS PÁGINAS */

const pagina1 = document.querySelector("#pagina1");
const pagina2 = document.querySelector("#pagina2");

/* BOTÕES */

const btnTeste = document.querySelector("#btnTeste");
const btnVoltar = document.querySelector("#btnVoltar");


/* BOTÃO TESTAR APLICATIVO */

btnTeste.onclick = function() {

    pagina1.style.display = "none";
    pagina2.style.display = "flex";

};


/* BOTÃO VOLTAR */

btnVoltar.onclick = function() {

    pagina2.style.display = "none";
    pagina1.style.display = "flex";

};
