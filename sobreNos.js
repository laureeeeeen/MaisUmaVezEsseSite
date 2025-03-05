document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const leftArrow = document.querySelector('#seta-esquerda');
    const rightArrow = document.querySelector('#next');

    let currentIndex = 0;
    const totalItems = items.length;
    const itemsToShow = 4; // Número de imagens visíveis ao mesmo tempo

    // Função para mover as imagens para a esquerda
    const moveLeft = () => {
        if (currentIndex === 0) {
            currentIndex = totalItems - itemsToShow;  // Volta para o final
        } else {
            currentIndex--;
        }
        updateCarousel();
    };

    // Função para mover as imagens para a direita
    const moveRight = () => {
        if (currentIndex === totalItems - itemsToShow) {
            currentIndex = 0;  // Volta para o começo
        } else {
            currentIndex++;
        }
        updateCarousel();
    };

    // Atualiza as imagens visíveis (mostra o grupo correto de 4)
    const updateCarousel = () => {
        items.forEach((item, index) => {
            // Calcula a posição de cada item com base no índice
            if (index >= currentIndex && index < currentIndex + itemsToShow) {
                item.style.display = "block";  // Exibe a imagem
            } else {
                item.style.display = "none";  // Oculta as imagens fora da faixa
            }
        });
    };

    // Adiciona eventos de clique para as setas
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    // Inicia o carrossel com as 4 primeiras imagens visíveis
    updateCarousel();
});