const btnInicio = document.querySelector(".cabecalho__menu");
const menuLateral = document.querySelector(".menu-lateral");
btnInicio.addEventListener("click", function () {
  menuLateral.classList.toggle("menu-lateral--ativo");
});
