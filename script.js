// Lista de imagens e suas respostas corretas
const images = [
    {
        src: 'caminho/para/imagem1.jpg',
        stadium: 'arena-conda',
        month: 'janeiro',
        year: '2024'
    },
    {
        src: 'caminho/para/imagem2.jpg',
        stadium: 'canamericarena',
        month: 'fevereiro',
        year: '2023'
    },
    {
        src: 'caminho/para/imagem3.jpg',
        stadium: 'viensk-stadoum',
        month: 'marco',
        year: '2022'
    }
    // Adicione mais imagens e respostas conforme necessário
];

let currentImageIndex = 0;

// Função para carregar a imagem atual
function loadImage() {
    const image = images[currentImageIndex];
    document.getElementById('screenshot').src = image.src;
}

// Função para verificar a resposta
function checkAnswer() {
    const stadium = document.getElementById('stadium').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const resultElement = document.getElementById('result');
    const image = images[currentImageIndex];

    if (stadium === image.stadium && month === image.month && year === image.year) {
        resultElement.textContent = "Correto!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Tente novamente.";
        resultElement.style.color = "red";
    }
}

// Função para ir para a próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    loadImage();
    document.getElementById('result').textContent = ""; // Limpa o resultado anterior
}

// Carrega a primeira imagem ao iniciar
loadImage();
