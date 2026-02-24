const atalhos = document.querySelectorAll(".atalhos a");
const habilidades = document.querySelectorAll(".card-habilidade");
const projetos = document.querySelectorAll(".card-projeto");
const botoes = document.querySelectorAll(".btn-demo");
const contatos = document.querySelectorAll(".info-contato a");

//atalhos
atalhos.forEach((atalho) => {
  atalho.addEventListener("mouseenter", () => {
    atalho.style.backgroundColor = "#4F6F52";
    atalho.style.color = "#F5F5F3";
  });

  atalho.addEventListener("mouseleave", () => {
    atalho.style.backgroundColor = "transparent";
    atalho.style.color = "#4F6F52";
  });
});


///habilidades
habilidades.forEach((habilidade) => {
  habilidade.addEventListener("mouseenter", () => {
    habilidade.style.borderColor = "#4F6F52";
    habilidade.style.backgroundColor = "rgb(231, 231, 231)";
  });

  habilidade.addEventListener("mouseleave", () => {
    habilidade.style.borderColor = "#E6E6E6";
    habilidade.style.backgroundColor = "#FFFFFF";
  });
});


///projetos
projetos.forEach((projeto) => {
  projeto.addEventListener("mouseenter", () => {
    projeto.style.borderColor = "#4F6F52";
    projeto.style.backgroundColor = "rgb(231, 231, 231)";
  });

  projeto.addEventListener("mouseleave", () => {
    projeto.style.borderColor = "#E6E6E6";
    projeto.style.backgroundColor = "#FFFFFF";
  });
});


///botoes
botoes.forEach((botao) => {
  botao.addEventListener("mouseenter", () => {
    botao.style.backgroundColor = "#8FBF9F";
    botao.style.color = "#2B2B2B";
  });

  botao.addEventListener("mouseleave", () => {
    botao.style.backgroundColor = "#4F6F52";
    botao.style.color = "#F5F5F3";
  });
});


///contatos
contatos.forEach((contato) => {
  contato.addEventListener("mouseenter", () => {
    contato.style.backgroundColor = "#4F6F52";
    contato.style.color = "#F5F5F3";
  });

  contato.addEventListener("mouseleave", () => {
    contato.style.backgroundColor = "#FFFFFF";
    contato.style.color = "#4F6F52";
  });
});
