let prevButtonAut = document.getElementById('prevAut');
let nextButtonAut = document.getElementById('nextAut');
let containerAut = document.querySelector('.containerAutores');
let itemsAut = containerAut.querySelectorAll('.listAut .itemAut');
let indicatorAut = document.querySelector('.indicatorsAut');
let dotsAut = indicatorAut.querySelectorAll('ul li');

let activeAut = 0;
let firstPositionAut = 0;
let lastPositionAut = itemsAut.length - 1;

// Configuração inicial: apenas o primeiro item aparece
itemsAut.forEach((itemAut, indexi) => {
    if (indexi !== 0) {
        itemAut.style.opacity = "0";
        itemAut.style.transform = "translateX(100vw)";
    } else {
        itemAut.classList.add('activeAut');
    }
    dotsAut[indexi].classList.toggle('activeAut', indexi === 0);
});

// Atualiza o slider e os indicadores
function setSliderAut() {
    let itemOldAut = containerAut.querySelector('.listAut .itemAut.activeAut');
    let dotsOldAut = indicatorAut.querySelector('ul li.activeAut');

    if (itemOldAut) itemOldAut.classList.remove('activeAut');
    if (dotsOldAut) dotsOldAut.classList.remove('activeAut');

    itemsAut[activeAut].classList.add('activeAut');
    itemsAut.forEach((itemAut, indexi) => {
        if (indexi === activeAut) {
            itemAut.style.opacity = "1";
            itemAut.style.transform = "translateX(0)";
        } else {
            itemAut.style.opacity = "0";
            itemAut.style.transform = "translateX(100vw)";
        }
    });

    dotsAut[activeAut].classList.add('activeAut');
    indicatorAut.querySelector('.numberAut').innerHTML = '0' + (activeAut + 1);
}

// Avançar slide
nextButtonAut.onclick = () => {
    activeAut = activeAut + 1 > lastPositionAut ? 0 : activeAut + 1;
    setSliderAut();
};

// Voltar slide
prevButtonAut.onclick = () => {
    activeAut = activeAut - 1 < firstPositionAut ? lastPositionAut : activeAut - 1;
    setSliderAut();
};