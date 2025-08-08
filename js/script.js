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

// Dropdown "Trabalhe Conosco"
const btnTrabalhe = document.getElementById('btnTrabalhe');
const emailMenu   = document.getElementById('emailMenu');
const wrapEmail   = btnTrabalhe ? btnTrabalhe.closest('.btn-email-wrap') : null;

if (btnTrabalhe && emailMenu && wrapEmail) {
  btnTrabalhe.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = wrapEmail.classList.contains('aberta');
    wrapEmail.classList.toggle('aberta', !open);
    btnTrabalhe.setAttribute('aria-expanded', String(!open));
    emailMenu.setAttribute('aria-hidden', String(open));
  });
  // fecha clicando fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-email-wrap')) {
      wrapEmail.classList.remove('aberta');
      btnTrabalhe.setAttribute('aria-expanded', 'false');
      emailMenu.setAttribute('aria-hidden', 'true');
    }
  });
  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      wrapEmail.classList.remove('aberta');
      btnTrabalhe.setAttribute('aria-expanded', 'false');
      emailMenu.setAttribute('aria-hidden', 'true');
    }
  });
}