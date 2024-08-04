document.addEventListener('DOMContentLoaded', () => {
    fetch('/destinos')
        .then(response => response.json())
        .then(data => {
            const destinosList = document.getElementById('destinos-list');
            data.forEach(destino => {
                const destinoItem = document.createElement('div');
                destinoItem.innerHTML = `
                    <h3>${destino.nome}</h3>
                    <p>${destino.descricao}</p>
                    <img src="${destino.imagem}" alt="${destino.nome}">
                `;
                destinosList.appendChild(destinoItem);
            });
        })
        .catch(error => console.error('Erro ao buscar destinos:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos
});
