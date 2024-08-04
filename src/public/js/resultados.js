document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        fetch(`/api/search?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                const resultadosList = document.getElementById('resultados-list');
                resultadosList.innerHTML = ''; // Limpar resultados anteriores

                if (data.length > 0) {
                    data.forEach(item => {
                        const itemDiv = document.createElement('div');
                        itemDiv.className = 'resultado-item';
                        itemDiv.innerHTML = `
                            <a href="${item.url}">
                                <div class="imagem-faixa">
                                    <img src="${item.imagem}" alt="${item.nome}">
                                    <h2>${item.nome}</h2>
                                </div>
                                <div class="texto-descricao">
                                    <p>${item.descricao}</p>
                                </div>
                            </a>
                        `;
                        resultadosList.appendChild(itemDiv);
                    });
                } else {
                    resultadosList.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar resultados:', error);
                const resultadosList = document.getElementById('resultados-list');
                resultadosList.innerHTML = '<p>Erro ao buscar resultados.</p>';
            });
    } else {
        const resultadosList = document.getElementById('resultados-list');
        resultadosList.innerHTML = '<p>Nenhuma consulta especificada.</p>';
    }
});
