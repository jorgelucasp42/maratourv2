function transformarEmSlug(texto) {
    return texto.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '')       // Remove todos os caracteres não alfanuméricos
        .replace(/\-\-+/g, '-')         // Substitui múltiplos hífens por um único hífen
        .replace(/^-+/, '')             // Remove hífens do início
        .replace(/-+$/, '');            // Remove hífens do fim
}

document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-bar").value;
    const slug = transformarEmSlug(query);
    window.location.href = `resultados.html?search=${slug}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    if (searchQuery) {
        fetch(`/api/buscar?query=${searchQuery}`)
            .then(response => response.json())
            .then(resultados => {
                const resultadosContainer = document.getElementById('resultados-list');
                resultadosContainer.innerHTML = '';

                if (resultados.length > 0) {
                    resultados.forEach(item => {
                        const itemElemento = document.createElement('div');
                        itemElemento.classList.add('resultado-item');
                        itemElemento.innerHTML = `
                            <div class="imagem-faixa">
                                <img src="${item.imagem}" alt="${item.nome}">
                                <h1>${item.nome}</h1>
                            </div>
                            <p>${item.descricao}</p>
                            <a href="${item.tipo === 'destino' ? 'detalhes.html?destino=' : 'detalhesatrativos.html?atrativo='}${item.slug}">Ver mais</a>
                        `;
                        resultadosContainer.appendChild(itemElemento);
                    });
                } else {
                    resultadosContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar resultados:', error);
                document.getElementById('resultados-list').innerHTML = 'Erro ao buscar resultados.';
            });
    } else {
        document.getElementById('resultados-list').innerHTML = 'Nenhum termo de busca especificado.';
    }
});
