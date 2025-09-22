document.getElementById("btn-portfolio").addEventListener("click", () => {
  window.location.href = "projetos.html"; // vai abrir a página de projetos
});

// Destaque do menu ativo ao clicar
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
  });
});
