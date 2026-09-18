/* =========================
   MENU
========================= */

const menuButton = document.getElementById("menuButton");

const menu = document.getElementById("menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* =========================
   FECHAR MENU AO CLICAR
   EM UMA OPÇÃO
========================= */

const menuLinks = document.querySelectorAll("#menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* =========================
   FECHAR AO CLICAR FORA
========================= */

document.addEventListener("click", (event) => {

    const clicouNoMenu =
        menu.contains(event.target);

    const clicouNoBotao =
        menuButton.contains(event.target);


    if (!clicouNoMenu && !clicouNoBotao) {

        menu.classList.remove("active");

    }

});
