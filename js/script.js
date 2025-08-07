// Mostrar ou esconder o botão "voltar ao topo"
window.addEventListener("scroll", function () {
  const botao = document.getElementById("voltarTopo");
  if (window.scrollY > 300) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
});

// Rolagem suave ao clicar no botão
document.getElementById("voltarTopo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});