//BOTÃO HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});

//NAVEGAÇÃO SUAVE 
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Impede o comportamento padrão

          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              const offset = 150; // Ajuste para considerar o menu fixo
              const targetPosition = targetSection.offsetTop - offset;

              window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
              });
          }
      });
  });
});

document.querySelectorAll('.carrossel-wrapper').forEach(wrapper => {
const carousel = wrapper.querySelector('.carrossel');
const items = carousel.querySelectorAll('li');

let index = 0; // índice do primeiro item visível no carrossel

// Determina quantos itens serão mostrados de acordo com o tamanho da tela
function getItemsToShow() {
  // Aqui, < 768px mostra 1 item, caso contrário mostra 3
  return window.innerWidth < 768 ? 1 : 3;
}

// Calcula a largura de cada item, somando as margens se houver
function getItemWidth() {
  const style = getComputedStyle(items[0]);
  const marginLeft = parseInt(style.marginLeft) || 0;
  const marginRight = parseInt(style.marginRight) || 0;
  // offsetWidth pega a largura total do item (sem margens)
  return items[0].offsetWidth + marginLeft + marginRight;
}

// Atualiza o deslocamento (transform) do carrossel
function updateCarousel() {
  const itemsToShow = getItemsToShow();
  const itemWidth = getItemWidth();
  const maxIndex = items.length - itemsToShow; 
  // Garante que o index não ultrapasse o limite
  if (index > maxIndex) index = maxIndex;
  if (index < 0) index = 0;
  
  // Desloca o carrossel para a esquerda em "index * largura do item"
  carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}

// Botão "próximo"
wrapper.querySelector('.next-btn').addEventListener('click', () => {
  index++;
  updateCarousel();
});

// Botão "anterior"
wrapper.querySelector('.prev-btn').addEventListener('click', () => {
  index--;
  updateCarousel();
});

// Ajusta dinamicamente ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel na carga
updateCarousel();
});

//CARROSSEL FOTOS INTERNA

const prevBtnFotoInt = document.getElementById("prev-foto-int");
const nextBtnFotoInt = document.getElementById("next-foto-int");
const carrosselWrapperFotoInt = document.querySelector(".carrossel-wrapper-foto-int");

let indexFotoInt = 0;

nextBtnFotoInt.addEventListener("click", () => {
indexFotoInt = (indexFotoInt + 1) % 6;
carrosselWrapperFotoInt.style.transform = `translateX(-${indexFotoInt * 100}%)`;
});

prevBtnFotoInt.addEventListener("click", () => {
indexFotoInt = (indexFotoInt - 1 + 6) % 6;
carrosselWrapperFotoInt.style.transform = `translateX(-${indexFotoInt * 100}%)`;
});
