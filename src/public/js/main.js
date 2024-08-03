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
