function transformarEmSlug(texto) {
    return texto.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '')       // Remove todos os caracteres não alfanuméricos
        .replace(/\-\-+/g, '-')         // Substitui múltiplos hífens por um único hífen
        .replace(/^-+/, '')             // Remove hífens do início
        .replace(/-+$/, '');            // Remove hífens do fim
}

document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("search-bar").value;
    const slug = transformarEmSlug(query);
    window.location.href = `resultados.html?query=${slug}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    console.log(`Consulta recebida: ${query}`); // Log para verificar a consulta recebida

    if (query) {
        fetch(`/api/search?query=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos:', data); // Log para verificar os dados recebidos
                const resultadosList = document.getElementById('resultados-list');
                if (data.length > 0) {
                    data.forEach(item => {
                        const resultadoItem = document.createElement('div');
                        resultadoItem.className = 'resultado-item';
                        resultadoItem.innerHTML = `
                            <h3>${item.nome}</h3>
                            <p>${item.descricao}</p>
                            <a href="${item.url}">Ver mais</a>
                        `;
                        resultadosList.appendChild(resultadoItem);
                    });
                } else {
                    resultadosList.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar resultados:', error);
                document.getElementById('resultados-list').innerHTML = '<p>Erro ao buscar resultados.</p>';
            });
    } else {
        document.getElementById('resultados-list').innerHTML = '<p>Nenhuma busca realizada.</p>';
    }
});
